#version 300 es

precision mediump float;

in vec2 texcoord;

uniform sampler2D image;

out vec4 FragColor;

void main() {
    vec2 fishtexcoord = texcoord * vec2(2.0, 2.0) - vec2(1.0, 1.0);
    float theta = atan(fishtexcoord.y, fishtexcoord.x);
    float radius = pow(length(fishtexcoord), 1.5);
    fishtexcoord = vec2(radius * cos(theta), radius * sin(theta));
    fishtexcoord = vec2(0.5, 0.5) * (fishtexcoord + vec2(1.0, 1.0));
    FragColor = texture(image, fishtexcoord);
}
