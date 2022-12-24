cd './deeplearning-service'
python './styletransfer.py' --content '../../style-transfer-frontend/src/database/inputs/content.png' \
--style '../../style-transfer-frontend/src/database/inputs/style1.png' --output '../../style-transfer-frontend/src/database/outputs/result.png' \
--alpha $1 --additional_style_flag true --style1 '../../style-transfer-frontend/src/database/inputs/style2.png' --beta $2
