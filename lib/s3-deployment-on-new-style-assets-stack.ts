import * as cdk from '@aws-cdk/core';
import s3 = require('@aws-cdk/aws-s3');
import s3deploy = require('@aws-cdk/aws-s3-deployment');
import path = require('path');

export class S3DeploymentOnNewStyleAssetsStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const assetBucket = new s3.Bucket(this, 'TestBucket');

    const confPrefix = 'tunasync/worker/';
    const tmpOutput = path.join(__dirname, `./files`);
    const confFileDeployment = new s3deploy.BucketDeployment(this, 'WorkerConfFileDeployments', {
      sources: [s3deploy.Source.asset(tmpOutput)],
      destinationBucket: assetBucket,
      destinationKeyPrefix: confPrefix, // optional prefix in destination bucket
      prune: false,
      retainOnDelete: false,
    });
  }
}
