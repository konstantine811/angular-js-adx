# Script to push website content to S3/Cloudfront
# You need to have loaded the AWS keys as environment variables before
# running this script

BUCKET=s3://stage.adx.ixlayer.com
DISTRIBUTION_ID=E3Q5IACDA15BW0

aws s3 sync build/ $BUCKET

aws cloudfront create-invalidation --paths '/*' --distribution-id $DISTRIBUTION_ID 
