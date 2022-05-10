#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    float red = round(texture(image, texcoord).r * 4.0) / 4.0;
    float green = round(texture(image, texcoord).g * 4.0) / 4.0;
    float blue = round(texture(image, texcoord).b * 4.0) / 4.0;
    FragColor = vec4(red, green, blue, 1.0);
}
