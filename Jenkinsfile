pipeline {
    agent any
    
    stages {
        stage("Clone Code") {
            steps {
                echo "Cloning the code" 
                sh "pwd"
                git url: "https://github.com/Abhishekyadav2096/Node-test.git", branch: "main"
                echo "Cloning done"
            }
        }
        
        stage("Build") {
            steps {
                echo "Building the image"
                sh "docker build -t node-test ."
            }
        }
        
        stage("Push to Docker Hub") {
            steps {
                echo "Pushing the image to docker hub"
                withCredentials([usernamePassword(credentialsId: "dockerhub", passwordVariable: "dockerhubpass", usernameVariable: "dockerhubuser")]) {
                    sh "docker tag node-test ${env.dockerhubuser}/node-test:latest"
                    sh "docker login -u ${env.dockerhubuser} -p ${env.dockerhubpass}"
                    sh "docker push ${env.dockerhubuser}/node-test:latest"
                }
            }
        }
        
        stage("Deploy") {
            steps {
                echo "Deploying the container"
                // sh "docker run -d -p 3000:3000 abhi2096/node-test:latest"
                sh "docker-compose down && docker-compose up -d"
            }
        }
    }
}
