package pt.photuseretratus.webApp;

import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.concurrent.atomic.AtomicLong;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

@RestController
public class Controller {

    @CrossOrigin(origins = "*")
    @PostMapping(
            path="/imagekitio/posturl",
            produces = MediaType.TEXT_PLAIN_VALUE,
            consumes = MediaType.APPLICATION_JSON_VALUE)
    public String postURL(@RequestBody URLInfo urlInfo) throws IOException {
        ImageKitIO imageKitIO = new ImageKitIO();
        return imageKitIO.getURL(urlInfo);
    }
}


