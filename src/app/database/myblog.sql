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

 Date: 28/10/2021 14:13:47
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for articlecard
-- ----------------------------
DROP TABLE IF EXISTS `articlecard`;
CREATE TABLE `articlecard`  (
  `id` int NOT NULL,
  `title` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `date` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `introduce` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NULL DEFAULT NULL,
  `visits` int NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of articlecard
-- ----------------------------
INSERT INTO `articlecard` VALUES (0, '你好啊', '1999-09-12', '我的生日', 10);
INSERT INTO `articlecard` VALUES (1, 'js基础详解', '1999-09-12', 'js基础详解微软亚太文任由他为人我一会条我也会突然也很感人', 6);

SET FOREIGN_KEY_CHECKS = 1;
