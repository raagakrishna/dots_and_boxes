USE master;
IF EXISTS(select * from sys.databases where name='OAuth')
DROP DATABASE OAuth

CREATE DATABASE OAuth

GO

USE OAuth;

GO

CREATE TABLE UserInformation (
	UserId [int] IDENTITY(1,1) NOT NULL,
	Username [varchar](120) NOT NULL UNIQUE,
	Email [varchar](320) NOT NULL UNIQUE,
	CONSTRAINT [PK_UserInformation] PRIMARY KEY CLUSTERED
	(
		UserId ASC
	)
);
GO

CREATE TABLE PasswordInformation (
	PassId [int] IDENTITY(1,1) NOT NULL,
    UserId [int] NOT NULL,
    HashedPassword [varchar] (255) NOT NULL,
    Salt [varchar] (255) NOT NULL
    CONSTRAINT [PK_UserPasswordInformation] PRIMARY KEY CLUSTERED
    (
        PassId ASC
    ),
    CONSTRAINT [FK_User_Pass] FOREIGN KEY (UserId) REFERENCES UserInformation (UserId)
);
GO

CREATE TABLE RefreshUUIDS (
	RefreshID [int] IDENTITY(1,1) NOT NULL,
    Username [varchar](120) NOT NULL UNIQUE,
    UUID [varchar] (120),
    CONSTRAINT [PK_Refresh] PRIMARY KEY CLUSTERED
    (
        RefreshID ASC
    ),
    CONSTRAINT [FK_User_Refresh] FOREIGN KEY (Username) REFERENCES UserInformation (Username)
);
GO

CREATE VIEW LoginInfo
AS
SELECT info.Username, pass.HashedPassword, pass.Salt
FROM UserInformation info JOIN PasswordInformation pass ON info.UserId = pass.UserId
GO

CREATE PROCEDURE InsertUser (
   @username VARCHAR(50),
   @email VARCHAR(100),
   @hashedPassword VARCHAR(255),
   @salt VARCHAR(255)
)
AS
  -- Declare a variable for the new UserID
  DECLARE @newUserID INT;

  -- Insert the user into the User table
  INSERT INTO UserInformation (Username, Email)
  VALUES (@username, @email);

  -- Retrieve the auto-generated UserID of the newly inserted user
  SET @newUserID = SCOPE_IDENTITY();

  -- Insert the password into the Password table
  INSERT INTO PasswordInformation (UserID, HashedPassword, Salt)
  VALUES (@newUserID, @hashedPassword, @salt);

  INSERT INTO RefreshUUIDS (Username)
  Values (@username)
GO

CREATE PROCEDURE UpdatePassword(
	@email VARCHAR(100),
	@hashedPassword VARCHAR(255),
	@salt VARCHAR(255)
) AS
	DECLARE @username VARCHAR(255);
	DECLARE @userID INT
	SELECT @username = Username, @userID =UserId
	FROM UserInformation
	WHERE Email = @email;

	UPDATE PasswordInformation
	SET HashedPassword = @hashedPassword, Salt = @salt
	WHERE UserId = @userID;

	UPDATE RefreshUUIDS
	SET UUID = NULL
	WHERE Username = @username;
GO