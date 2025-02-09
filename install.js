module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "git config --global --add safe.directory '*'",
          "git clone -b sd3 https://github.com/kohya-ss/sd-scripts"
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        path: "sd-scripts",
        venv: "../env",
        message: [
          "pip install -r requirements.txt",
        ]
      }
    },
    {
      method: "shell.run",
      params: {
        venv: "env",
        message: [
          "pip uninstall -y diffusers[torch] torch torchaudio torchvision",
          "pip install -r requirements.txt",
        ]
      }
    },
    {
      method: "script.start",
      params: {
        uri: "torch.js",
        params: {
          venv: "env",
          // xformers: true   // uncomment this line if your project requires xformers
        }
      }
    },
    {
      method: "fs.link",
      params: {
        drive: {
          vae: "/content/gdrive/MyDrive/ComfyUI/models/vae",
          clip: "/content/gdrive/MyDrive/ComfyUI/models/clip",
          unet: "/content/gdrive/MyDrive/ComfyUI/models/diffusion_models",
          loras: "outputs",
        },
        peers: [
          "https://github.com/pinokiofactory/stable-diffusion-webui-forge.git",
          "https://github.com/pinokiofactory/comfy.git",
          "https://github.com/cocktailpeanutlabs/comfyui.git",
          "https://github.com/cocktailpeanutlabs/fooocus.git",
          "https://github.com/cocktailpeanutlabs/automatic1111.git",
        ]
      }
    },
    {
      method: "fs.link",
      params: {
        drive: {
          "models/clip/clip_l.safetensors": "/content/gdrive/MyDrive/ComfyUI/models/clip/clip_l.safetensors",
          "models/clip/t5xxl_fp16.safetensors": "/content/gdrive/MyDrive/ComfyUI/models/clip/t5xxl_fp16.safetensors",
          "models/vae/ae.sft": "/content/gdrive/MyDrive/ComfyUI/models/vae/ae.safetensors",
          "models/unet/flux1-dev.safetensors": "/content/gdrive/MyDrive/ComfyUI/models/diffusion_models/flux_dev.safetensors"
        }
      }
    },
    {
      method: "fs.link",
      params: {
        venv: "env"
      }
    }
  ]
}
