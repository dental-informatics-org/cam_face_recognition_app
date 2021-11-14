<h1 align="center">Face Recognition Using Cam Streaming</h1>
<h2 align="center">Healthcare & Life Sciences Cloud Solutions</h2>

<p align="center">
  <a href="">
    <img src="https://github.com/igoralves1/Dental-Informatics/blob/main/imgs/aws_health.png" alt="aws_health">
  </a>
</p>

# Face Recognition Using Cam Streaming

![alt text](https://github.com/dental-informatics-org/cam_face_recognition_app/blob/main/logo.webp?raw=true)

## Deep Learning AMI (Amazon Linux 2) Version 53.0 - ami-063679062358cd1f3
>MXNet-1.8.0 & 1.7.0, TensorFlow-2.4.3, 2.3.4 & 1.15.5, PyTorch-1.7.1 & 1.8.1, Neuron, & others. NVIDIA CUDA, cuDNN, NCCL, Intel MKL-DNN, Docker, NVIDIA-Docker & EFA support. For fully managed experience, check: https://aws.amazon.com/sagemaker
Root device type: ebs Virtualization type: hvm ENA Enabled: Yes

Run this command, if necessary, to ensure your key is not publicly viewable

```
chmod 400 ml-test.pem
```

Connect to your instance using its Public DNS: `ec2-34-221-121-230.us-west-2.compute.amazonaws.com
`
```
ssh -i "ml-test.pem" ec2-user@ec2-34-221-121-230.us-west-2.compute.amazonaws.com
```
</br>

> # First steps
- Create an conda env for the task:

```python
conda create --name myenv
```
 myenv: the name of your environment. In this case I used 'facialrecog'.

 - Ative o ambiente conda:
 ```python
 conda activate facialrecog
 ```

- Install necessary dependencies (make sure cmake is installed first)::

```python
git clone https://github.com/davisking/dlib.git
```
- Create build folder
```python
cd dlib, mkdir build, cd build
```
- Check compatibility with the machine. Make sure the dlib will not use CUDA and cuDNN. There is a conflict with the architecture and for now I have not been able to find a way to optimize the process.
[StackOverflow Opened Question](https://stackoverflow.com/questions/69966148/dlib-in-face-recognition-are-not-working-well-with-cuda-in-ec2-amazon-deeplearni)

```python
cmake .., cmake --build .
```
- Install setup.py using the C++ lib in python
```python
cd ..
python3 setup.py install
```

- Install jupyter notebook:
```python
conda install jupyter
```

- Install pip in conda env:

```python
conda install pip
```

- Install ipykernel (jupyternotebook):

```python
pip install ipykernel
# preferably do not install only with 'conda install ipykernel'
```

- Install OpenCV:
```python
pip install opencv-python
```
</br>

# Pipeline of algorithm:

Open the following file in your browser:

 face_recognition/flowchart_face_recog.drawio.html

 Or see the pipeline pdf
 [Pipeline's FlowChart](https://github.com/dental-informatics-org/dental.informatics.org/blob/main/face_recognition/Preview.pdf)
 ## Folders:

 /Data contains the /to_detect folder which consists of the images to have faces detected.

 They also contain the /to_recog folder where the images have created numpy arrays.

 The algorithm is still under construction. Watch this video for a better understanding of how this beta version works:

 > https://www.youtube.com/watch?v=NpebGV_nDRw






Resource:
1. [Deep Dive Into AWS Polly](https://labrlearning.medium.com/a-deep-dive-into-amazon-polly-3672baf6c624)
2. [AWS POLLY Browser + Cognito](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html)
3. [Amazon Polly using Node.js](https://medium.com/@anaptfox/getting-started-with-amazon-polly-using-node-js-345e84dbd23d)
4. [synthesizeSpeech-aws class](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/Polly.html#synthesizeSpeech-property)
