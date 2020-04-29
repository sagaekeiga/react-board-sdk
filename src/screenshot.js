import { fabric } from 'fabric';
import html2canvas from 'html2canvas';
import elem from './element';

const takeScreenShot = () => {
  html2canvas(document.querySelector('body')).then(html2canvas => {
    const imagePath = html2canvas.toDataURL('image/jpeg', 1);
    let canvas = new fabric.Canvas('canvas', { preserveObjectStacking: true });

    canvas.freeDrawingBrush.color = '#000000';
    canvas.freeDrawingBrush.width = 3;
    const canvasContainer = window.document.getElementById('canvas-container')

    /*
      画像を描画する
    */
    canvas.setHeight(canvasContainer.clientHeight);
    canvas.setWidth(canvasContainer.clientWidth);

    fabric.Image.fromURL(imagePath, image => {
      const scale = canvasContainer.clientWidth / image.width;
      image.scale(scale);
      image.set({
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      });

      console.log(image)

      canvas.add(image);
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
  });
}

/*
  拡大と縮小
*/
const zoom = (opt, canvas) => {
  //ポインタの位置取得
  let mouseX = opt.pointer.x;
  let mouseY = opt.pointer.y;

  //ホイール回転の取得
  const deltaY = opt.e.wheelDeltaY;


  //現在の拡大倍率の取得
  let zoom = canvas.getZoom();

  if (0.95 <= zoom + deltaY / 2400 && zoom + deltaY / 2400 <= 1) {
    canvas.item(0).set({
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    })
    canvas.renderAll();
  } else {
    if ((zoom + deltaY / 2400) <= 1) { return }
    canvas.zoomToPoint(new fabric.Point(mouseX, mouseY), zoom + deltaY / 2400);
  }
  //マウス位置を原点として拡大縮小
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