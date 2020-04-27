import { fabric } from 'fabric';
import html2canvas from 'html2canvas';
import elem from './element';

let state = [];
let mods = 0;

const takeScreenShot = () => {
  html2canvas(document.querySelector('body')).then(html2canvas => {
    const imagePath = html2canvas.toDataURL('image/jpeg', 1);
    let canvas = new fabric.Canvas('canvas', { preserveObjectStacking: true });

    canvas.freeDrawingBrush.color = '#000000';
    canvas.freeDrawingBrush.width = 3;
    canvas.zoomToPoint(new fabric.Point(canvas.width / 2, canvas.height / 2), window.innerWidth / 480 * 0.1 );

    /*
      画像を描画する
    */
    canvas.setHeight(window.innerWidth * 0.9);
    canvas.setWidth(window.innerHeight * 0.9);
    canvas.setDimensions({ width: window.innerWidth * 0.8, height: window.innerHeight * 0.8 });

    fabric.Image.fromURL(imagePath, img => {
      canvas.add(img);
      canvas.item(0).selectable = false;
    });

    // SP用
    // const freeLine = document.querySelector('#freeLine');
    // freeLine.addEventListener('click', e => {
    //   e.preventDefault();
    //   addFreeLine(canvas);
    // });

    const straightLine = document.querySelector('#straightLine');
    straightLine.addEventListener('click', e => {
      e.preventDefault();
      addStraightLine(canvas);
    });

    const remove = document.querySelector('#remove');
    remove.addEventListener('click', e => {
      e.preventDefault();
      canvas.remove(canvas.getActiveObject())
    });

    canvas.on('mouse:wheel', opt => { zoom(opt, canvas) })

    elem.hide('.loader');

  });
}

/*
  拡大と縮小
*/
const zoom = (opt, canvas) => {
  //ポインタの位置取得
  const mouseX = opt.pointer.x;
  const mouseY = opt.pointer.y;

  //ホイール回転の取得
  const deltaY = opt.e.wheelDeltaY;

  //現在の拡大倍率の取得
  let zoom = canvas.getZoom();

  if ((zoom + deltaY / 2400) < 0.09) { return }
  //マウス位置を原点として拡大縮小
  canvas.zoomToPoint(new fabric.Point(mouseX, mouseY), zoom + deltaY / 2400);
}

/*
  直線を書く
*/
const addStraightLine = (canvas) => {
  let line;
  canvas.isDrawingMode = false;
  canvas.selection = false;
  canvas.hoverCursor = 'crosshair';
  canvas.on('mouse:down', o => {
    const pointer = canvas.getPointer(o.e);
    const points = [pointer.x, pointer.y, pointer.x, pointer.y];

    line = new fabric.Line(points, {
      selectable: true,
      strokeWidth: 5,
      stroke: 'red'
    });
    canvas.add(line);
  });


  canvas.on('mouse:move', o => {
    if (!line) { return }
    const pointer = canvas.getPointer(o.e);
    line.set({ x2: pointer.x, y2: pointer.y });
    canvas.renderAll();
  });

  canvas.on('mouse:up', o => {
    line.setCoords();
    canvas.selection = true;
    canvas.hoverCursor = 'move';
    canvas.off('mouse:down');
    canvas.off('mouse:up');
    canvas.off('mouse:move');
  });
}

// SP用
// const addFreeLine = (canvas) => {
//   canvas.isDrawingMode = true;
//   canvas.selection = false;
//   canvas.item(0).selectable = false;
//   canvas.on('mouse:up', o => {
//     canvas.isDrawingMode = false;
//     canvas.selection = true;
//     canvas.item(0).selectable = true;
//     canvas.off('mouse:down');
//     canvas.off('mouse:up');
//     canvas.off('mouse:move');
//   });
// }


export default {
  takeScreenShot
};