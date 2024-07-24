# cdk-waf-acl-constructs

## Description

`cdk-waf-acl-constructs` は、AWS CDK (Cloud Development Kit) を使用してAWS WAF (Web Application Firewall) のACL (Access Control List) を簡単に構築するためのTypeScriptライブラリです。

このライブラリは、一般的に使用されるWAF ACLパターンを事前定義された構成要素（Constructs）として提供し、セキュアなウェブアプリケーション構築のプロセスを簡素化します。

## 主な特徴

- TypeScriptで実装され、型安全性を確保
- 一般的なWAF ACLパターンを再利用可能なConstructsとして提供
- AWS CDKプロジェクトに簡単に統合可能
- カスタマイズ可能なパラメータで柔軟な設定が可能
- ベストプラクティスに基づいたセキュリティ設定

## 使用例

このライブラリを使用することで、複雑なWAF ACL設定を数行のコードで実装できます。例えば：

- 一般的なウェブ攻撃からの保護
- 地理的制限の実装
- レートベースのルールの設定
- カスタムルールの簡易作成

## インストール

```bash
npm install cdk-waf-acl-constructs
