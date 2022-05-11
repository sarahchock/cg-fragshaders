#version 300 es

precision mediump float;

in vec2 texcoord;

uniform float time;
uniform float width;
uniform float height;
uniform sampler2D image;

out vec4 FragColor;
int isBright(vec4 col);

void main() 
{
    int bright = isBright(texture(image, texcoord));
    float length = mod(time + sin((texcoord.x + texcoord.y)) * 5.0, 10.0);
    int new = int(length);
    if(bright == 0)
    {
        FragColor = texture(image, texcoord);
        for(int j = 0; j < new; j++)
        {
            float jf = float(j);
            for(int i = 0; i < 4; i++)
            {
                vec2 temp;
                if(i == 0)
                {
                    temp = vec2(texcoord.x + jf *1.0/width, texcoord.y + jf *1.0/height);
                }
                else if(i == 1)
                {
                    temp = vec2(texcoord.x - jf *1.0/width, texcoord.y + jf *1.0/height);
                }
                else if(i == 2)
                {
                    temp = vec2(texcoord.x - jf *1.0/width, texcoord.y - jf *1.0/height);
                }
                else
                {
                    temp = vec2(texcoord.x + jf *1.0/width, texcoord.y - jf *1.0/height); 
                }
                if(isBright(texture(image, temp)) == 1)
                {
                    FragColor = vec4(1.0,1.0,1.0,1.0);
                }
            }
        }
    }
    else
    {
        FragColor = texture(image, texcoord);
    }
}

int isBright(vec4 col)
{
    float luminance = .299*col.r + .587*col.g + .114*col.b;
    if(luminance > .85)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}
