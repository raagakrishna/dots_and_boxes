package za.dots;

import io.javalin.*;
import za.dots.util.FileUtil;

import java.io.IOException;
import java.nio.charset.StandardCharsets;

import static io.javalin.apibuilder.ApiBuilder.*;

public class App
{
    public static void main( String[] args )
    {
        Javalin app = Javalin.create().start(80);
        app.routes(() -> {
            get("/{file}", ctx -> {
                try {
                    ctx.html(FileUtil.readFile("../site/" + ctx.pathParam("file") + ".html", StandardCharsets.UTF_8));
                } catch (IOException e) {
                    ctx.result("404 :(");
                }
            });
        });
    }
}
