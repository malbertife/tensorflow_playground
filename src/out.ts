import * as ds from './dataset'
import * as fs from 'fs'

function writeDataset(name: string, dataset: ds.Example2D[]) {
    dataset.forEach(point => {
        fs.appendFile(name, String(point.x) + ' ' + String(point.y) + ' ' + String(point.label) + '\n', (err) => {
            if (err) console.log(err);
        });
    })
}

let nSamples = 1000;
let noise = 0.3;

["circle.txt", 'spiral.txt', 'twogauss.txt', 'xor.txt'].forEach(name => {
    if (fs.existsSync(name))
        fs.unlinkSync(name);
});

writeDataset('circle.txt', ds.classifyCircleData(nSamples, noise));
writeDataset('spiral.txt', ds.classifySpiralData(nSamples, noise));
writeDataset('twogauss.txt', ds.classifyTwoGaussData(nSamples, noise));
writeDataset('xor.txt', ds.classifyXORData(nSamples, noise));
