#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { WithLambdaTriggerStack } from '../lib/with_lambda_trigger-stack';

const app = new cdk.App();
new WithLambdaTriggerStack(app, 'WithLambdaTriggerStack');
