# fdc
http://fdcamplify.s3-website-us-east-1.amazonaws.com

## Creating & configuring the Vue project

npm install -g @vue/cli

## Clone project and install dependencies 

### Getting Started

1. Clone project and install dependencies 

```
$ git clone https://github.com/smartmaxdev/fdcamplifydemo.git
```

```
$ cd fdcamplifydemo
```

```
$ npm install
```

2. Intialize a new [AWS Amplify CLI](https://github.com/aws-amplify/amplify-cli) project:

```
$ npm install -g @aws-amplify/cli
```

Configures the AWS access credentials, AWS Region and sets up a new AWS User Profile
```
$ amplify configure
```

Initializes a new project, sets up deployment resources in the cloud and prepares your project for Amplify.
```
$ amplify init
```

Add auth
```
$ amplify add auth
```

Provisions cloud resources with the latest local developments.
```
$ amplify push
```

### Compiles and hot-reloads for development
```
$ npm run serve
```

### Compiles and minifies for production
```
$ npm run build
```
### deploy to s3 bucket

```
$ sh deployment.sh prod
```

### Run your tests
```
$ npm run test
```
