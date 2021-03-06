/*
 Navicat MySQL Data Transfer

 Source Server         : midway_try
 Source Server Type    : MySQL
 Source Server Version : 80026
 Source Host           : localhost:3306
 Source Schema         : myblog

 Target Server Type    : MySQL
 Target Server Version : 80026
 File Encoding         : 65001

 Date: 02/11/2021 18:05:13
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for articlecard
-- ----------------------------
DROP TABLE IF EXISTS `articlecard`;
CREATE TABLE `articlecard`  (
  `id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL COMMENT '文章id值\r\n',
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '文章标题',
  `date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '文章创建时间',
  `introduce` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '文章主要信息介绍',
  `visits` int NULL DEFAULT NULL COMMENT '文章访问人数',
  `last_edit_date` datetime NULL DEFAULT NULL COMMENT '文章最后编辑时间',
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL COMMENT '文章分类',
  `has_sourceCode_read` int NULL DEFAULT NULL COMMENT '是否存在源码解读页面',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of articlecard
-- ----------------------------
INSERT INTO `articlecard` VALUES ('1564894845', '开源协议解读', '1999-09-10', '各种开源协议', 10, NULL, 'react', 0);
INSERT INTO `articlecard` VALUES ('4984158695', 'lodash源码解读', '1999-09-16', 'lodash源码解读,更好的理解技术操作', 6, NULL, 'react', 0);
INSERT INTO `articlecard` VALUES ('7894998484', 'test', '1999-19-12', 'markdown-test', 2, NULL, 'vue', 0);

-- ----------------------------
-- Table structure for indexpage_cardlist
-- ----------------------------
DROP TABLE IF EXISTS `indexpage_cardlist`;
CREATE TABLE `indexpage_cardlist`  (
  `id` int NOT NULL AUTO_INCREMENT,
  `card_backgroud_image` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `description` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of indexpage_cardlist
-- ----------------------------
INSERT INTO `indexpage_cardlist` VALUES (1, 'vue.png', 'switch', 'vue', 'Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。');

SET FOREIGN_KEY_CHECKS = 1;
