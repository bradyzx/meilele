/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50508
Source Host           : localhost:3306
Source Database       : meilele

Target Server Type    : MYSQL
Target Server Version : 50508
File Encoding         : 65001

Date: 2018-04-02 08:48:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for detail
-- ----------------------------
DROP TABLE IF EXISTS `detail`;
CREATE TABLE `detail` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of detail
-- ----------------------------
INSERT INTO `detail` VALUES ('1', 'http://image.meilele.com/images/201711/1511847456617335824.jpg');
INSERT INTO `detail` VALUES ('2', 'http://image.meilele.com/images/201711/1511847456281306800.jpg');
INSERT INTO `detail` VALUES ('3', 'http://img001.mllres.com/images/201711/1511847456442762336.jpg');

-- ----------------------------
-- Table structure for floor_11
-- ----------------------------
DROP TABLE IF EXISTS `floor_11`;
CREATE TABLE `floor_11` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `text` varchar(255) NOT NULL,
  `price` varchar(10) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of floor_11
-- ----------------------------
INSERT INTO `floor_11` VALUES ('1', 'http://img004.mllres.com/images/201803/1521182136443079494.jpg', '奢华桃花芯木双色牛皮床', '镇宅美榻 大省2000 ￥', '7999');
INSERT INTO `floor_11` VALUES ('2', 'http://img004.mllres.com/images/201709/1505079992122706553.jpg', '天然乳胶3D椰棕环保床垫', '立省500+0元换购乳胶枕 ¥', '2799');
INSERT INTO `floor_11` VALUES ('3', 'http://image.meilele.com/images/201702/1486942761706017372.jpg', '对称雕花水晶拉扣真皮床', '镇宅美榻 大省2000 ¥', '3150');
INSERT INTO `floor_11` VALUES ('4', 'http://img002.mllres.com/images/201711/1510279220512671310.jpg', '超高性价比', '现代风格环保皮艺1.8米床 ¥', '1299');

-- ----------------------------
-- Table structure for lunbo
-- ----------------------------
DROP TABLE IF EXISTS `lunbo`;
CREATE TABLE `lunbo` (
  `sid` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of lunbo
-- ----------------------------
INSERT INTO `lunbo` VALUES ('1', 'http://img002.mllres.com/images/201803/1521395132980616010.jpg', '四月会员季');
INSERT INTO `lunbo` VALUES ('2', 'http://img003.mllres.com/images/201803/1521251443676201197.jpg', '睡着了才有梦');
INSERT INTO `lunbo` VALUES ('3', 'http://img004.mllres.com/images/201712/1512070924236747121.jpg', '沙发');

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `sid` tinyint(3) unsigned NOT NULL AUTO_INCREMENT,
  `url` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `price` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`sid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', 'http://img002.mllres.com/images/201712/1514150604139995331.jpg', '多格储物 自带扶梯', '3599');
INSERT INTO `product` VALUES ('2', 'http://img002.mllres.com/images/201712/1514150484201238199.jpg', '甜美温馨少女系', '2580');
INSERT INTO `product` VALUES ('3', 'http://img003.mllres.com/images/201712/1514150684841621772.jpg', '杨帆青春 梦寻理想', '2499');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` tinyint(2) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
