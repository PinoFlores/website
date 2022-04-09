
resource "aws_s3_bucket" "website_app_s3_bucket" {
  bucket        = "${local.prefix}-app"
  acl           = "public-read"
  force_destroy = true

  website {
    index_document = "index.html"
    error_document = "index.html"
  }

  versioning {
    enabled = true
  }

  tags = local.common_tags
}


resource "aws_s3_bucket_policy" "website_app_s3_bucket_policy" {
  bucket = aws_s3_bucket.website_app_s3_bucket.id

  policy = <<POLICY
    {
        "Version": "2012-10-17",
        "Statement": [
            {
                "Sid": "PublicReadForGetBucketObjects",
                "Effect": "Allow",
                "Principal": "*",
                "Action": ["s3:GetObject"],
                "Resource": "arn:aws:s3:::${local.prefix}-dev/*"
            }
        ]
    }
    POLICY
}
