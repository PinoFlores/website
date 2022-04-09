provider "aws" {
  region  = "eu-west-3"
  profile = "profile"

}


terraform {
  backend "s3" {
    bucket  = "jose-website-dev"
    key     = "jose-website-dev.tfstate"
    region  = "eu-west-3"
    encrypt = true
  }
}

locals {
  prefix = "${var.prefix}-${terraform.workspace}"
  common_tags = {
    Environment = terraform.workspace
    Project     = var.project
    ManageBy    = "Terraform"
    Owner       = "Uzochuwu Eddie Odozi"
  }
}
