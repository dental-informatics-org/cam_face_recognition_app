# Documentação de algoritmo de reconhecimento facial - versão beta

## Trabalho desenvolvido em instância EC2 da máquina virtual da Amazon Deep Learning AMI (Amazon Linux 2) Version 52.0 - m4.xlarge.
</br>

> Primeiros Passos

- Criar um conda env para a tarefa: 

```python
conda create --name myenv
```
 myenv: o nome do seu ambiente. No caso utilizei facialrecog.

 - Ative o ambiente conda: 
 ```python
 conda activate facialrecog
 ```

- Instalar as dependências necessárias (certifique-se que existe cmake instalado antes): 

```python
git clone https://github.com/davisking/dlib.git
```
- Crie a pasta build
```python
cd dlib, mkdir build, cd build
```
- Verifique a compatibilidade com a máquina. Certifique-se que o dlib não utilizará CUDA e cuDNN. Há conflito com a arquitetura e por hora não consegui encontrar maneira de otimizar o processo.
[StackOverflow Opened Question](https://stackoverflow.com/questions/69966148/dlib-in-face-recognition-are-not-working-well-with-cuda-in-ec2-amazon-deeplearni)

```python
cmake .., cmake --build .
```
- Instale o setup a utilizar a lib C++ em python:
```python
cd ..
python3 setup.py install
```

- Instale o jupyter notebook:
```python
conda install jupyter
```

- Instale o pip no conda env:

```python
conda install pip
```

- Instale o ipykernel (jupyternotebook):

```python
pip install ipykernel
# preferencialmente não instale apenas com conda install ipykernel
```

- Instale o OpenCV:
```python
pip install opencv-python
```
</br>

# Pipeline do algoritmo

Abra o seguinte arquivo no navegador:

 face_recognition/flowchart_face_recog.drawio.html 
 
 Ou veja o pdf do pipeline:
 [Pipeline's FlowChart](https://github.com/dental-informatics-org/dental.informatics.org/blob/main/face_recognition/Preview.pdf)
 ## Pastas:
 
 /Data contêm a pasta /to_detect em que consiste nas imagens a terem rostos detectados.

 Contêm também a pasta /to_recog em que são as imagens a terem criadas numpy arrays.

 O algoritmo ainda está em construção. Assista a este vídeo para melhor entendimento sobre o funcionamento desta versão beta:

 > https://www.youtube.com/watch?v=NpebGV_nDRw   
