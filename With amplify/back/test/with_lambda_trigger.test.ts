import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as WithLambdaTrigger from '../lib/with_lambda_trigger-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new WithLambdaTrigger.WithLambdaTriggerStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
