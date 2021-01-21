#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { GogglesigninbackendStack } from '../lib/gogglesigninbackend-stack';

const app = new cdk.App();
new GogglesigninbackendStack(app, 'GogglesigninbackendStack');
