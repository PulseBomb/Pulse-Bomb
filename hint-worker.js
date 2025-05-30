self.onmessage = function(e) {
  const { tubes } = e.data; // ما في داعي لـ colors لو مش مستخدم

  const solutionPath = findPathBFS(tubes);

  self.postMessage({ solutionPath });
};

// بحث بعرض أول (BFS) لإيجاد مسار الحل
function findPathBFS(initialState) {
  const queue = [[initialState]];
  const visited = new Set([stateToString(initialState)]);

  while (queue.length) {
    const path = queue.shift();
    const currentState = path[path.length - 1];

    if (isGoalState(currentState)) return path;

    for (const nextState of getNextStates(currentState)) {
      const stateStr = stateToString(nextState);
      if (!visited.has(stateStr)) {
        visited.add(stateStr);
        queue.push([...path, nextState]);
      }
    }
  }
  return null; // ما في حل
}

// هل الأنابيب كلها مفصولة ومتناسقة؟
function isGoalState(tubes) {
  return tubes.every(tube =>
    tube.length === 0 || (tube.every(color => color === tube[0]) && tube.length <= 4)
  );
}

// توليد كل الحالات المحتملة القادمة من الحالة الحالية
function getNextStates(tubes) {
  const nextStates = [];
  const TUBE_CAPACITY = 4;

  for (let i = 0; i < tubes.length; i++) {
    if (tubes[i].length === 0) continue;

    const movingBall = tubes[i][tubes[i].length - 1];
    for (let j = 0; j < tubes.length; j++) {
      if (i === j || tubes[j].length >= TUBE_CAPACITY) continue;

      const destTube = tubes[j];
      if (destTube.length === 0 || destTube[destTube.length - 1] === movingBall) {
        // نسخ الحالة الحالية
        const newTubes = tubes.map(t => [...t]);

        // نقل الكرة
        newTubes[j].push(newTubes[i].pop());

        nextStates.push(newTubes);
      }
    }
  }
  return nextStates;
}

// تحويل الحالة لنص لتخزينها ومقارنة الحالات بسهولة
function stateToString(tubes) {
  return tubes.map(tube => tube.join(',')).join('|');
}