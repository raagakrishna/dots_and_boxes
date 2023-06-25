USE [Master]
GO

DROP DATABASE IF EXISTS [DotsAndBoxes]
GO

CREATE DATABASE [DotsAndBoxes]
GO

USE [DotsAndBoxes]
GO

-- Create the Room table
CREATE TABLE [Room] (
  [id]			INT				NOT NULL IDENTITY(1,1) PRIMARY KEY,
  [roomid]		VARCHAR(255)	NOT NULL, 
  [roomname]	VARCHAR(255)	NOT NULL,
  [status]		VARCHAR(255)	NOT NULL,
  [datecreated]	DATETIME		DEFAULT CURRENT_TIMESTAMP
);


-- Create the PlayerRoom table
CREATE TABLE [PlayerRoom] (
  [id]			INT				NOT NULL IDENTITY(1,1) PRIMARY KEY,
  [roomid]		VARCHAR(255)	NOT NULL,
  [username]	VARCHAR(255)	NOT NULL,
  [creator]		BIT				NOT NULL,
  [datecreated] DATETIME		DEFAULT CURRENT_TIMESTAMP
);


-- Create the Score table
CREATE TABLE [Score] (
  [id]			INT				NOT NULL IDENTITY(1,1) PRIMARY KEY,
  [roomid]		VARCHAR(255)	NOT NULL,
  [username]	VARCHAR(255)	NOT NULL,
  [score]		INT				NOT NULL,
  [datecreated] DATETIME DEFAULT CURRENT_TIMESTAMP
);


-- Create the Dot table
CREATE TABLE [Dot] (
  [id]			INT				NOT NULL IDENTITY(1,1) PRIMARY KEY,
  [roomid]		VARCHAR(255)	NOT NULL,
  [x]			INT				NOT NULL,
  [y]			INT				NOT NULL,
  [datecrated]	DATETIME		DEFAULT CURRENT_TIMESTAMP
);


-- Create the Line table
CREATE TABLE [Line] (
  [id]			INT				NOT NULL IDENTITY(1,1) PRIMARY KEY,
  [roomid]		VARCHAR(255)	NOT NULL,
  [x]			INT				NOT NULL,
  [y]			INT				NOT NULL,
  [dot1_id]		INT,
  [dot2_id]		INT,
  [status]		VARCHAR(255)	NOT NULL,
  [username]	VARCHAR(255)	NULL,
  [datecreated] DATETIME		DEFAULT CURRENT_TIMESTAMP
);


-- Create the Box table
CREATE TABLE [Box] (
  [id]			INT				NOT NULL IDENTITY(1,1) PRIMARY KEY,
  [roomid]		VARCHAR(255)	NOT NULL,
  [x]			INT				NOT NULL,
  [y]			INT				NOT NULL,
  [line1_id]	INT,
  [line2_id]	INT,
  [line3_id]	INT,
  [line4_id]	INT,
  [status]		VARCHAR(255)	NOT NULL,
  [username]	VARCHAR(255)	NULL,
  [datecreated]	DATETIME		DEFAULT CURRENT_TIMESTAMP
);


-- Create the Game table
CREATE TABLE [Game] (
  [id]				INT				NOT NULL IDENTITY(1,1) PRIMARY KEY,
  [roomid]			VARCHAR(255)	NOT NULL,
  [gridsize]		INT				NOT NULL,
  [status]			VARCHAR(255)	NOT NULL,
  [currentplayer]	VARCHAR(255)	NOT NULL,
  [winner]			VARCHAR(255)	NULL,
  [datecreated]		DATETIME		DEFAULT CURRENT_TIMESTAMP
);

