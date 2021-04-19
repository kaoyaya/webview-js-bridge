pipeline {
    agent any
    tools { nodejs "NodeJS 10.15.1" }
    environment {
        NAME = 'webview-js-bridge'
        PROFILE = 'fc'
    }

    stages {
        stage('下载代码') {
            steps {
                echo '****************************** download code start... ******************************'
                git branch: 'fc', credentialsId: '	eb31cb77-1afb-42b6-922d-3ec28c31ed6a', url: 'https://github.com/kaoyaya/webview-js-bridge.git'
            }
        }



        stage('vue环境准备') {
            steps {
                echo '****************************** vue start... ******************************'
                sh 'npm install'
                sh 'npm run build'
            }
        }


    }
}
