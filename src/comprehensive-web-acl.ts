import { Construct } from 'constructs';
import { aws_wafv2 as wafv2 } from 'aws-cdk-lib';

export interface ComprehensiveWebAclProps {
  name: string;
  scope: 'CLOUDFRONT' | 'REGIONAL';
}

export class ComprehensiveWebAcl extends Construct {
  constructor(scope: Construct, id: string, props: ComprehensiveWebAclProps) {
    super(scope, id);

    new wafv2.CfnWebACL(this, 'ComprehensiveWebAcl', {
      name: props.name,
      scope: props.scope,
      defaultAction: { allow: {} },
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: `${props.name}-metric`,
        sampledRequestsEnabled: true,
      },
      rules: [
        this.createManagedRule('AWSManagedRulesAmazonIpReputationList', 1),
        this.createManagedRule('AWSManagedRulesAnonymousIpList', 2),
        this.createManagedRule('AWSManagedRulesCommonRuleSet', 3),
        this.createManagedRule('AWSManagedRulesKnownBadInputsRuleSet', 4),
        this.createManagedRule('AWSManagedRulesAdminProtectionRuleSet', 5),
        this.createManagedRule('AWSManagedRulesLinuxRuleSet', 6),
        this.createManagedRule('AWSManagedRulesSQLiRuleSet', 7),
      ],
    });
  }

  private createManagedRule(name: string, priority: number): wafv2.CfnWebACL.RuleProperty {
    return {
      name: name,
      priority: priority,
      overrideAction: { none: {} },
      statement: {
        managedRuleGroupStatement: {
          name: name,
          vendorName: 'AWS',
        },
      },
      visibilityConfig: {
        cloudWatchMetricsEnabled: true,
        metricName: `${name}Metric`,
        sampledRequestsEnabled: true,
      },
    };
  }
}