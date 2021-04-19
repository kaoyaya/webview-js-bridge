pipeline {
    agent any
    tools { nodejs "NodeJS 10.15.1" }
    environment {
        NAME = 'webview-js-bridge'
        PROFILE = 'fc'
    }
     triggers {
            GenericTrigger(
                genericVariables: [
                  [key: 'ref', value: '$.ref'],
                  [key: 'repositoryURL', value: '$.https://github.com/kaoyaya/webview-js-bridge.git'],
                  [key: 'branch', value: '$.fc']
                ],
                token: 'token-remote-test' ,
                causeString: '$ref' ,
                printContributedVariables: true,
                printPostContent: true
            )
        }
    stages {
        stage('下载代码') {
            steps {
                echo '****************************** download code start... ******************************'
                checkout([$class: 'GitSCM',
                                            branches: [[name: "${branch}"]],
                                            doGenerateSubmoduleConfigurations: false,
                                            extensions: [],
                                            submoduleCfg: [],
                                            userRemoteConfigs: [[credentialsId: 'eb31cb77-1afb-42b6-922d-3ec28c31ed6a',
                                                                url: "${repositoryURL}"]]])
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
