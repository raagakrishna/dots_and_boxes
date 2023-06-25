package za.resources;

import io.javalin.Javalin;
import io.javalin.http.Context;
import za.resources.cryptography.RSAKeys;
import za.resources.database.DatabaseAccess;
import za.resources.environment.EnvironmentVariables;
import za.resources.exception.InvalidTokenException;
import za.resources.exception.OAuthExceptions;
import za.resources.models.RefreshInput;
import za.resources.models.Result;
import za.resources.util.jwt.JwtUtils;
import za.resources.validation.Validation;

import java.security.NoSuchAlgorithmException;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.InvalidKeySpecException;
import java.sql.DriverManager;
import java.sql.SQLException;

public class App {


    public static void main(String[] args) throws SQLException, NoSuchAlgorithmException, InvalidKeySpecException {
        RSAPrivateKey privateKey = RSAKeys.getRSAPrivateKey(EnvironmentVariables.privateKeyLocation);
        RSAPublicKey publicKey = RSAKeys.getRSAPublicKey(EnvironmentVariables.publicKeyLocation);
        DriverManager.registerDriver(new com.microsoft.sqlserver.jdbc.SQLServerDriver());
        JwtUtils jwtUtils = new JwtUtils(publicKey, privateKey);
        Javalin app = Javalin.create().start(7071);

        app.before("/login", Validation::usernameValidation);
        app.before("/register", Validation::usernameValidation);
        app.before("/register", Validation::emailValidation);
        app.before("/register", Validation::passwordValidation);

        app.post("/register", context -> register(context, jwtUtils));
        app.post("/login", context -> login(context, jwtUtils));
        app.post("/refresh", context -> refresh(context, jwtUtils));
        app.exception(OAuthExceptions.class, (e, ctx) -> ctx.status(e.getStatus()).json(e.getReason()));
    }

    private static void register(Context context, JwtUtils utils) {
        String username = context.formParam("username");
        String password = context.formParam("password");
        String email = context.formParam("email");
        if (DatabaseAccess.insertUser(username, email, password)) {
            context.status(200).json(utils.generateToken(username));
        } else {
            context.status(400).json(new Result("Failure"));
        }
    }

    private static void login(Context context, JwtUtils utils) {
        String username = context.formParam("username");
        String password = context.formParam("password");
        if (DatabaseAccess.userExists(username, password)) {
            context.status(200).json(utils.generateToken(username));
        } else {
            context.status(400).json(new Result("Failure"));
        }
    }

    private static void refresh(Context context, JwtUtils utils) throws InvalidTokenException {
        RefreshInput input = context.bodyAsClass(RefreshInput.class);
        context.status(200).json(utils.generateRefreshedToken(input.getToken(), input.getRefreshToken()));
    }


}
