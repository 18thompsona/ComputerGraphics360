
class Canvas 
{
    constructor (width, height, Keypress, vertShader, fragShader) 
    {
        this.height = height;
        this.width = width;

        this.MakeCanvas();
        this.canvas.addEventListener("keypress", Keypress);

        this.SetupGL();
        this.MakeShaders(vertShader, fragShader);

        this.Init();
    }
    
    MakeCanvas() 
    {
        if (this.width == undefined || this.width < 0) 
        {
           this.width = 300;
        }

        if (this.height == undefined || this.height < 0) 
        {
           this.height = 300;
        }

         this.canvas = document.createElement('canvas')
         this.canvas.tabIndex=0;
         this.canvas.height = this.height;
         this.canvas.width = this.width;
         this.canvas.style="border:1px solid #000000;"
         document.body.appendChild(this.canvas);
    }
    
    SetupGL() 
    {
        this.gl = WebGLUtils.setupWebGL(this.canvas);
        
        if (!this.gl) 
        {
            alert ("WebGL isn't available");
            return;
        }
        this.gl.getExtension('OES_standard_derivatives');
    }
    
    MakeShaders(vertShader, fragShader) 
    {
        this.program = initShaders(this.gl, vertShader,fragShader);
        this.gl.useProgram(this.program);
    }
    
    Init() 
    {
        this.gl.clearColor(1.0, 1.0, 1.0, 1.0);
        this.gl.viewport(0,0, this.width, this.height);
    }
    
    Program() 
    {
        return this.program;
    }
    
    GL() 
    {
        return this.gl;
    }
    
    Clear() 
    {
       this.gl.clear(this.gl.COLOR_BUFFER_BIT);
    }   
}