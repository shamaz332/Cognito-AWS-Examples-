import * as cdk from "@aws-cdk/core";
import * as cognito from "@aws-cdk/aws-cognito";
import * as lambda from "@aws-cdk/aws-lambda";
import * as iam from "@aws-cdk/aws-iam";
export class BackStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const emailConf = new lambda.Function(this, "emailConfirmationLambda", {
      runtime: lambda.Runtime.NODEJS_10_X,
      handler: "emailConf.handler",
      code: lambda.Code.fromAsset("functions"),
    });

    const userPool = new cognito.UserPool(this, "userPool", {
      selfSignUpEnabled: true, //user can signup
      autoVerify: { email: true }, //will send a verification email
      signInAliases: { email: true }, //user can auth with email only
      userVerification: {
        emailSubject: "Verify your email to join our Community",
        emailBody: "helo {username},Thanks for joining us",
        emailStyle: cognito.VerificationEmailStyle.CODE,
        smsMessage: "helo {username},Thanks for joining us",
      },
      lambdaTriggers: {
        preSignUp: emailConf,
      },
    });
  }
}
