package pt.photuseretratus.webApp;

import io.imagekit.sdk.ImageKit;
import io.imagekit.sdk.config.Configuration;
import io.imagekit.sdk.models.results.ResultList;
import io.imagekit.sdk.utils.Utils;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ImageKitIO {

    ImageKit imageKit;
    Configuration configuration;
    public ImageKitIO() throws IOException {
        this.imageKit=ImageKit.getInstance();
        configuration = new Configuration();
        configuration.setPrivateKey(System.getenv("IMAGEKITIOPRIV"));
        configuration.setPublicKey("public_TGL83sxiUWGZfYFL0MMz9r7AXTw=");
        configuration.setUrlEndpoint("https://ik.imagekit.io/minecopre");
        this.imageKit.setConfig(configuration);
    }g

    public String getURL(URLInfo urlInfo){

        List<Map<String, String>> transformation=new ArrayList<Map<String, String>>();
        transformation.add(urlInfo.getTransformation());

        Map<String, Object> options=new HashMap<>();
        options.put("path", urlInfo.getPath());
        options.put("transformation",transformation);

        return imageKit.getUrl(options);

    }

}