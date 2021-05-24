#ifdef GL_ES
precision mediump float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

float createCircle(vec2 position,float radius){
    return length(position)-radius;
}

float line(in vec2 p,in vec2 a,in vec2 b)
{
    vec2 pa=p-a,ba=b-a;
    float h=clamp(dot(pa,ba)/dot(ba,ba),0.,1.);
    return length(pa-ba*h);
}

void main(){
    vec2 coord=gl_FragCoord.xy/u_resolution-.5;
    coord.x*=u_resolution.x/u_resolution.y;
    vec3 color=vec3(1.);
    
    float circle1=createCircle(coord-vec2(.25*sin(u_time),.25),.05);
    float circle2=createCircle(coord,.05);
    float circle3=createCircle(coord-vec2(-.25*sin(u_time),-.25),.05);
    
    vec2 a=vec2(.1,.1);
    vec2 b=vec2(-.1,-.1);
    //this is the signed distance from all pixels to the line
    //it will give a half plane (black an white for positive and negative)
    float dist=line(coord,a,b);
    // to make a line we can do that : it uses the "gradient" of the SDF
// the part where the function returns a value between 0 and 1. try changin the 5 :)

color*=(sign(circle1)*sign(circle2)*sign(circle3)*step(.001,dist));

gl_FragColor=vec4(color,1.);
}