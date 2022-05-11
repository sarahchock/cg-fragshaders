#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    //ideas: glitter/sparkly, melting, yassify, swiping through
    FragColor = texture(image, texcoord);
}
