use ImageKit\ImageKit;

$text = $_POST['text'];

$imageKit = new ImageKit(
    "public_TGL83sxiUWGZfYFL0MMz9r7AXTw=",
    "private_UTwuFdOJoKH3tkWbe6iko+7SB4I=",
    "https://ik.imagekit.io/minecopre"
);

$imageURL = $imageKit->url(array(
    "path" => "/assets/" + $text,
    "transformation" => array(
        array(
            "height" => "300",
            "width" => "400",
        )
    )
));
