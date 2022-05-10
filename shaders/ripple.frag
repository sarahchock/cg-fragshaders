#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 riptexcoord = texcoord * vec2(2.0, 2.0) - vec2(1.0, 1.0);
    float radius = length(riptexcoord); // should this be the magnitude of the original or the new one
    vec2 offset = riptexcoord * (sin(radius * 30.0 - time * 5.0) + 5.0) / 60.0; // again, which one
    vec2 final = texcoord - offset;
    FragColor = texture(image, final);
}
