define([
    "dojo/_base/declare",
    "dojo/dom-construct",
    "dojo/query",
    "dojox/mobile/ContentPane",
    "app/util/app"
], function (declare, domConstruct, query, ContentPane, app) {
    return declare("app.widget.special.home.PnlWebGL", [ContentPane], {
        width: null,
        height: null,
        backgroundColor: "black",
        postCreate: function () {
            this.inherited(arguments);

            function makeShader(webGL, src, type) {
                var shader = webGL.createShader(type);

                webGL.shaderSource(shader, src);
                webGL.compileShader(shader);

                if (!webGL.getShaderParameter(shader, webGL.COMPILE_STATUS)) {
                    alert("Unable to compile shader: " + webGL.getShaderInfoLog(shader));
                }

                return shader;
            }

            try {
                var canvas = domConstruct.create("canvas", {
                    width: this.width,
                    height: this.height,
                    style: { backgroundColor: this.backgroundColor },
                    innerHTML: "Your browser does not support the HTML5 canvas element."
                }, this.domNode);

                var webGL = canvas.getContext("webgl") || canvas.getContext("experimental-webgl");

                if (typeof webGL != "undefined" && webGL != null) {
                    webGL.clearColor(0.1, 0.5, 0.1, 1.0);
                    webGL.clear(webGL.COLOR_BUFFER_BIT);

                    var webGLProgram = webGL.createProgram();

                    webGL.attachShader(webGLProgram, makeShader(webGL,
                        "attribute vec3 aVertexPosition;" +
                        "void main(void) {" +
                            "gl_Position = vec4(aVertexPosition, 1.0);" +
                        "}", webGL.VERTEX_SHADER));
                    webGL.attachShader(webGLProgram, makeShader(webGL,
                        "void main(void) {" +
                            "gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);" +
                        "}", webGL.FRAGMENT_SHADER));
                    webGL.linkProgram(webGLProgram);

                    if (webGL.getProgramParameter(webGLProgram, webGL.LINK_STATUS)) {
                        webGL.useProgram(webGLProgram);

                        var trianglesVerticeBuffer = webGL.createBuffer();

                        webGL.bindBuffer(webGL.ARRAY_BUFFER, trianglesVerticeBuffer);
                        webGL.bufferData(webGL.ARRAY_BUFFER, new Float32Array([
                            -0.5, 0.5, 0.0,
                            0.0, 0.0, 0.0,
                            -0.5, -0.5, 0.0,
                            0.5, 0.5, 0.0,
                            0.0, 0.0, 0.0,
                            0.5, -0.5, 0.0
                        ]), webGL.STATIC_DRAW);

                        var vertexPositionAttribute = webGL.getAttribLocation(webGLProgram, "aVertexPosition");
                        webGL.enableVertexAttribArray(vertexPositionAttribute);
                        webGL.bindBuffer(webGL.ARRAY_BUFFER, trianglesVerticeBuffer);
                        webGL.vertexAttribPointer(vertexPositionAttribute, 3, webGL.FLOAT, false, 0, 0);
                        webGL.drawArrays(webGL.TRIANGLES, 0, 6);
                    }
                    else {
                        alert("Unable to initialize the shader program.");
                    }
                } else {
                    alert("Your browser does not support WebGL.");
                }
            } catch (ex) {
                alert(ex.message);
            }
        }
    });
});
