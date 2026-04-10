const fs = require('fs');
const path = require('path');

// 读取750px备份文件
const inputFile = path.join(__dirname, '滴滴货运司机端设计规范_750px.backup');
const outputFile = path.join(__dirname, '滴滴货运司机端设计规范_375px_processed.skills');

const data = JSON.parse(fs.readFileSync(inputFile, 'utf8'));

// 递归处理所有数值属性
function processObject(obj) {
  if (typeof obj === 'object' && obj !== null) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const value = obj[key];
        
        // 处理字符串类型的数值（带单位）
        if (typeof value === 'string') {
          // 处理像素值
          if (value.endsWith('px')) {
            const num = parseFloat(value);
            if (!isNaN(num)) {
              // 特殊处理750px
              if (num === 750) {
                obj[key] = '375px';
              } else {
                obj[key] = (num / 2) + 'px';
              }
            }
          }
          // 处理其他单位的值（如%）
        } else if (typeof value === 'number') {
          // 处理纯数值
          obj[key] = value / 2;
        } else if (typeof value === 'object') {
          // 递归处理对象
          processObject(value);
        }
      }
    }
  } else if (Array.isArray(obj)) {
    // 递归处理数组
    obj.forEach(item => processObject(item));
  }
}

// 处理数据
processObject(data);

// 更新版本信息
data.version = '1.2.0';
data.updatedAt = '2026-04-10';

// 写入修改后的文件
fs.writeFileSync(outputFile, JSON.stringify(data, null, 2), 'utf8');

console.log('处理完成！处理后的文件已保存为：', outputFile);
