#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    float luminance = .299*texture(image, texcoord).r + .587*texture(image, texcoord).g + .114*texture(image, texcoord).b;
    FragColor = vec4(luminance, luminance, luminance, 1.0);
}
