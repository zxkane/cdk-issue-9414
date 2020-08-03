#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { S3DeploymentOnNewStyleAssetsStack } from '../lib/s3-deployment-on-new-style-assets-stack';

const app = new cdk.App();
new S3DeploymentOnNewStyleAssetsStack(app, 'S3DeploymentOnNewStyleAssetsStack');
