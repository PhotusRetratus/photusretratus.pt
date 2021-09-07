package pt.photuseretratus.webApp;

import java.util.Map;

public class URLInfo {

    String path;
    Map<String, String> transformation;

    public String getPath() {
        return path;
    }

    public void setPath(String path) {
        this.path = path;
    }

    public Map<String, String> getTransformation() {
        return transformation;
    }

    public void setTransformation(Map<String, String> transformation) {
        this.transformation = transformation;
    }
}