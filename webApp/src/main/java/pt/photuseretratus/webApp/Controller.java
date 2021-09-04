package pt.photuseretratus.webApp;

import java.io.IOException;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {

    @CrossOrigin
    @GetMapping("/imagekitio/geturl")
    public String getURL(@RequestParam(value = "path", defaultValue = "/header.jpg") String path) throws IOException {
        ImageKitIO imageKitIO = new ImageKitIO();
        return imageKitIO.getURL(path);
    }

}


