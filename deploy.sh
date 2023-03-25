#!/bin/bash

# Sync the build output directory with the S3 bucket
aws s3 sync .next s3://aigpt.strastan.com --delete

# Invalidate the CloudFront cache
#aws cloudfront create-invalidation --distribution-id DISTRIBUTION_ID --paths "/*"
