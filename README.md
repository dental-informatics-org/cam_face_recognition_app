# Face Recognition Using Cam Streaming


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



Resource:
1. [Deep Dive Into AWS Polly](https://labrlearning.medium.com/a-deep-dive-into-amazon-polly-3672baf6c624)
2. [AWS POLLY Browser + Cognito](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/getting-started-browser.html)