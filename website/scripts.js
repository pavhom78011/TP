const initialObjs = [
  { id: 'emp-001', description: 'Врач-анестезиолог, дежурный по бригаде Б-01', createdAt: new Date('2025-05-01T08:00:00'), author: 'Отдел кадров', photoLink: '', type: 'employee', staffNumber: '1001', fullName: 'Иванов Иван Иванович', position: 'Врач', shiftStart: '2025-05-01', brigade: 'Б-01', phones: ['+375291112201'] },
  { id: 'emp-002', description: 'Фельдшер бригады Б-02', createdAt: new Date('2025-05-01T08:02:00'), author: 'Отдел кадров', photoLink: '', type: 'employee', staffNumber: '1002', fullName: 'Петров Петр Петрович', position: 'Фельдшер', shiftStart: '2025-05-01', brigade: 'Б-02', phones: ['+375291112202'] },
  { id: 'emp-003', description: 'Водитель бригады Б-01', createdAt: new Date('2025-04-28T09:00:00'), author: 'Отдел кадров', photoLink: '', type: 'employee', staffNumber: '1003', fullName: 'Сидоров Сидор Сидорович', position: 'Водитель', shiftStart: '2025-04-28', brigade: 'Б-01', phones: ['+375291112203'] },
  { id: 'ord-045', description: 'Приказ №45: назначение в бригаду Б-12', createdAt: new Date('2025-05-01T10:00:00'), author: 'Главный врач', photoLink: '', type: 'order', orderNumber: '45', orderDate: '2025-05-01', positions: [{ staffNumber: '1001', fullName: 'Иванов И.И.', brigade: 'Б-12', from: '2025-05-01', to: '2025-05-08' }] },
  { id: 'ord-046', description: 'Приказ №46: перераспределение водителей', createdAt: new Date('2025-05-05T09:30:00'), author: 'Главный врач', photoLink: '', type: 'order', orderNumber: '46', orderDate: '2025-05-05', positions: [{ staffNumber: '1003', fullName: 'Сидоров С.С.', brigade: 'Б-03', from: '2025-05-05', to: '2025-05-12' }] },
  { id: 'call-001', description: 'Падение с лестницы, оказана помощь, пациент оставлен дома', createdAt: new Date('2025-05-12T16:05:00'), author: 'Диспетчер-1', photoLink: '', type: 'call', dateTime: new Date('2025-05-12T16:05:00'), brigade: 'Б-03', address: 'пр. Победы, 14', patientName: 'Смирнов А.А.', measures: 'Иммобилизация, остановка кровотечения, контроль АД', arrivalTime: new Date('2025-05-12T16:45:00'), status: 'closed', crew: ['emp-002','emp-003'], hospitalSent: null },
  { id: 'call-002', description: 'Боль в груди, госпитализация в ЦКБ', createdAt: new Date('2025-06-02T11:20:00'), author: 'Диспетчер-2', photoLink: '', type: 'call', dateTime: new Date('2025-06-02T11:20:00'), brigade: 'Б-01', address: 'ул. Ленина, 7', patientName: 'Ковалев Б.Б.', measures: 'ЭКГ, нитроглицерин, инъекция аспирина. Направлен в ЦКБ', arrivalTime: new Date('2025-06-02T12:10:00'), status: 'hospitalized', crew: ['emp-001','emp-003'], hospitalSent: { name: 'ЦКБ', address: 'ул. Доктаров, 10' } },
  { id: 'call-003', description: 'Потеря сознания, пациент доставлен в Городскую больницу', createdAt: new Date('2025-04-15T09:10:00'), author: 'Диспетчер-3', photoLink: '', type: 'call', dateTime: new Date('2025-04-15T09:10:00'), brigade: 'Б-02', address: 'ул. Победы, 45', patientName: 'Кузнецова О.О.', measures: 'Оказана реанимационная помощь, доставлен в ГБ', arrivalTime: new Date('2025-04-15T09:50:00'), status: 'hospitalized', crew: ['emp-002','emp-001'], hospitalSent: { name: 'Городская больница', address: 'ул. Городская, 1' } },
  { id: 'call-004', description: 'Аллергическая реакция — помощь на месте', createdAt: new Date('2025-07-01T14:00:00'), author: 'Диспетчер-2', photoLink: '', type: 'call', dateTime: new Date('2025-07-01T14:00:00'), brigade: 'Б-03', address: 'ул. Мира, 12', patientName: 'Новикова Л.Л.', measures: 'Антигистаминные, наблюдение, отправлена домой', arrivalTime: new Date('2025-07-01T14:45:00'), status: 'closed', crew: ['emp-003'], hospitalSent: null },
  { id: 'emp-004', description: 'Диспетчер 24/7', createdAt: new Date('2025-03-12T08:00:00'), author: 'Админ', type: 'employee', staffNumber: '1004', fullName: 'Леонов Л.Л.', position: 'Диспетчер', shiftStart: '2025-03-12', brigade: null, phones: ['+375291112204'] },
  { id: 'emp-005', description: 'Медсестра бригады Б-02', createdAt: new Date('2025-02-28T08:10:00'), author: 'Отдел кадров', type: 'employee', staffNumber: '1005', fullName: 'Григорьева Г.Г.', position: 'Медсестра', shiftStart: '2025-02-28', brigade: 'Б-02', phones: [] },
  { id: 'ord-047', description: 'Приказ №47: отпуск по графику', createdAt: new Date('2025-06-10T09:00:00'), author: 'Кадры', type: 'order', orderNumber: '47', orderDate: '2025-06-10', positions: [] },
  { id: 'call-005', description: 'Температура и обезвоживание у ребенка', createdAt: new Date('2025-08-11T18:12:00'), author: 'Диспетчер-1', type: 'call', dateTime: new Date('2025-08-11T18:12:00'), brigade: 'Б-04', address: 'ул. Лесная, 8', patientName: 'Ребенок', measures: 'Жидкость, жаропонижающее', arrivalTime: new Date('2025-08-11T18:40:00'), status: 'closed', crew: ['emp-005'], hospitalSent: null },
  { id: 'call-006', description: 'Инсульт — срочная госпитализация', createdAt: new Date('2025-09-03T06:30:00'), author: 'Диспетчер-2', type: 'call', dateTime: new Date('2025-09-03T06:30:00'), brigade: 'Б-01', address: 'пр. Свободы, 3', patientName: 'Николаев Н.Н.', measures: 'Тромболизис подготовка, отправлен в НЦ', arrivalTime: new Date('2025-09-03T07:10:00'), status: 'hospitalized', crew: ['emp-001','emp-004'], hospitalSent: { name: 'НЦ неврологии', address: 'ул. Неврологов, 5' } },
  { id: 'emp-006', description: 'Интерн, бригада Б-04', createdAt: new Date('2025-01-15T08:00:00'), author: 'Кадры', type: 'employee', staffNumber: '1006', fullName: 'Катков К.К.', position: 'Интерн', shiftStart: '2025-01-15', brigade: 'Б-04', phones: [] },
  { id: 'call-007', description: 'Опёк руки — наложен перевязочный компресс', createdAt: new Date('2025-03-20T12:00:00'), author: 'Диспетчер-4', type: 'call', dateTime: new Date('2025-03-20T12:00:00'), brigade: 'Б-04', address: 'ул. Примерная, 11', patientName: 'Мельник М.М.', measures: 'Охлаждение, перевязка', arrivalTime: new Date('2025-03-20T12:30:00'), status: 'closed', crew: ['emp-006'], hospitalSent: null },
  { id: 'emp-007', description: 'Старшая медсестра', createdAt: new Date('2025-02-12T09:00:00'), author: 'Кадры', type: 'employee', staffNumber: '1007', fullName: 'Орлова О.О.', position: 'Старшая медсестра', shiftStart: '2025-02-12', brigade: null, phones: ['+375291112210'] },
  { id: 'call-008', description: 'Родильный дом — госпитализация', createdAt: new Date('2025-04-01T00:30:00'), author: 'Диспетчер-1', type: 'call', dateTime: new Date('2025-04-01T00:30:00'), brigade: 'Б-02', address: 'ул. Цветочная, 2', patientName: 'Петрова П.П.', measures: 'Акушерская помощь, транспортирована', arrivalTime: new Date('2025-04-01T01:15:00'), status: 'hospitalized', crew: ['emp-005','emp-007'], hospitalSent: { name: 'Родильный дом', address: 'ул. Материнства, 4' } },
  { id: 'call-009', description: 'Скорая помощь — проверка оборудования', createdAt: new Date('2025-07-15T09:45:00'), author: 'Техник', type: 'call', dateTime: new Date('2025-07-15T09:45:00'), brigade: 'Б-03', address: 'пункт базы', patientName: null, measures: 'Проверка кардиомонитора', arrivalTime: new Date('2025-07-15T10:10:00'), status: 'closed', crew: ['emp-003'], hospitalSent: null }
];

class AmbulanceCollection {
  _objs = [];

  constructor(objs = []) {
    if (!Array.isArray(objs)) throw new Error('Constructor expects array');
    this._objs = [];
    this.addAll(objs);
  }

  _isUniqueId(id) {
    return !this._objs.some(o => o.id === id);
  }

  _validateBase(obj) {
    if (typeof obj !== 'object' || obj === null) return false;
    if (!obj.id || typeof obj.id !== 'string') return false;
    if (!obj.description || typeof obj.description !== 'string' || obj.description.length >= 200) return false;
    if (!obj.createdAt || !(obj.createdAt instanceof Date) || Number.isNaN(obj.createdAt.getTime())) return false;
    if (!obj.author || typeof obj.author !== 'string' || obj.author.trim().length === 0) return false;
    if (obj.photoLink && typeof obj.photoLink !== 'string') return false;
    if (!obj.type || typeof obj.type !== 'string') return false;
    return true;
  }

  _normalizeDates(obj) {
    const copy = Object.assign({}, obj);
    if (copy.createdAt && !(copy.createdAt instanceof Date)) copy.createdAt = new Date(copy.createdAt);
    if (copy.dateTime && !(copy.dateTime instanceof Date)) copy.dateTime = new Date(copy.dateTime);
    if (copy.arrivalTime && !(copy.arrivalTime instanceof Date)) copy.arrivalTime = new Date(copy.arrivalTime);
    return copy;
  }

  validateObj(obj) {
    if (!this._validateBase(obj)) return false;
    switch (obj.type) {
      case 'employee':
        if (!obj.staffNumber || typeof obj.staffNumber !== 'string') return false;
        if (!obj.fullName || typeof obj.fullName !== 'string') return false;
        if (!obj.position || typeof obj.position !== 'string') return false;
        return true;
      case 'call':
        if (!obj.dateTime || !(obj.dateTime instanceof Date) || Number.isNaN(obj.dateTime.getTime())) return false;
        if (!obj.brigade || typeof obj.brigade !== 'string') return false;
        if (!obj.address || typeof obj.address !== 'string') return false;
        if (!obj.measures || typeof obj.measures !== 'string') return false;
        if (!obj.status || typeof obj.status !== 'string') return false;
        if (obj.crew && (!Array.isArray(obj.crew) || obj.crew.some(x => typeof x !== 'string'))) return false;
        return true;
      case 'order':
        if (!obj.orderNumber || typeof obj.orderNumber !== 'string') return false;
        if (!obj.orderDate || typeof obj.orderDate !== 'string') return false;
        if (!Array.isArray(obj.positions)) return false;
        return true;
      default:
        return false;
    }
  }

  addObj(obj) {
    try {
      const normalized = this._normalizeDates(obj);
      if (!this.validateObj(normalized)) return { ok: false, reason: 'validation_failed' };
      if (!this._isUniqueId(normalized.id)) return { ok: false, reason: 'duplicate_id' };
      const clone = JSON.parse(JSON.stringify(normalized));
      // Гарантируем Date объекты в хранилище
      clone.createdAt = new Date(normalized.createdAt);
      if (normalized.dateTime) clone.dateTime = new Date(normalized.dateTime);
      if (normalized.arrivalTime) clone.arrivalTime = normalized.arrivalTime ? new Date(normalized.arrivalTime) : null;
      this._objs.push(clone);
      return { ok: true };
    } catch (e) {
      console.error('addObj error', e);
      return { ok: false, reason: 'exception' };
    }
  }
  
  addAll(objs) {
    if (!Array.isArray(objs)) throw new Error('addAll expects array');
    const rejections = [];
    objs.forEach(o => {
      const res = this.addObj(o);
      if (!res.ok) rejections.push({ obj: o, reason: res.reason });
    });
    return rejections;
  }

  clear() {
    this._objs = [];
  }

  getObj(id) {
    if (!id) return null;
    const found = this._objs.find(o => o.id === id);
    return found ? JSON.parse(JSON.stringify(found)) : null;
  }

  removeObj(id) {
    const idx = this._objs.findIndex(o => o.id === id);
    if (idx === -1) return false;
    this._objs.splice(idx, 1);
    return true;
  }

  editObj(id, objPatch) {
    if (!id || typeof objPatch !== 'object' || objPatch === null) return { ok: false, reason: 'invalid_params' };
    const idx = this._objs.findIndex(o => o.id === id);
    if (idx === -1) return { ok: false, reason: 'not_found' };
    const target = Object.assign({}, this._objs[idx]); // shallow clone current stored object

    if ('id' in objPatch && objPatch.id !== id) return { ok: false, reason: 'id_change_forbidden' };
    if ('author' in objPatch && objPatch.author !== target.author) return { ok: false, reason: 'author_change_forbidden' };
    if ('createdAt' in objPatch && (new Date(objPatch.createdAt)).getTime() !== (new Date(target.createdAt)).getTime()) return { ok: false, reason: 'createdAt_change_forbidden' };

    const newObj = Object.assign({}, target, objPatch);
    const normalized = this._normalizeDates(newObj);

    if (!this.validateObj(normalized)) return { ok: false, reason: 'validation_failed' };

    const clone = JSON.parse(JSON.stringify(normalized));
    clone.createdAt = new Date(normalized.createdAt);
    if (normalized.dateTime) clone.dateTime = new Date(normalized.dateTime);
    if (normalized.arrivalTime) clone.arrivalTime = normalized.arrivalTime ? new Date(normalized.arrivalTime) : null;
    this._objs[idx] = clone;
    return { ok: true };
  }

  getObjs(skip = 0, top = 10, filterConfig = null) {
    if (typeof skip !== 'number' || skip < 0) skip = 0;
    if (typeof top !== 'number' || top <= 0) top = 10;

    let result = Array.from(this._objs);

    if (filterConfig && typeof filterConfig === 'object' && Object.keys(filterConfig).length > 0) {
      result = result.filter(obj => {
        if (filterConfig.author && obj.author !== filterConfig.author) return false;
        if (filterConfig.type && obj.type !== filterConfig.type) return false;
        if (filterConfig.brigade && obj.brigade !== filterConfig.brigade) return false;
        if (filterConfig.staffNumber && obj.staffNumber !== filterConfig.staffNumber) return false;
        if (filterConfig.position && obj.position !== filterConfig.position) return false;
        if (filterConfig.status && obj.status !== filterConfig.status) return false;

        if (filterConfig.dateFrom) {
          const from = new Date(filterConfig.dateFrom);
          const d = obj.dateTime || obj.createdAt;
          if (d < from) return false;
        }
        if (filterConfig.dateTo) {
          const to = new Date(filterConfig.dateTo);
          const d = obj.dateTime || obj.createdAt;
          if (d > to) return false;
        }
        return true;
      });
    }

    result.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    return result.slice(skip, skip + top).map(o => JSON.parse(JSON.stringify(o)));
  }

  _dumpAll() {
    return this._objs.map(o => JSON.parse(JSON.stringify(o)));
  }
}

const ambulanceCollection = new AmbulanceCollection(initialObjs);
console.group('AmbulanceCollection demo (final)');
console.log('_dumpAll', ambulanceCollection._dumpAll());
console.log('removeObj', ambulanceCollection.removeObj('emp-001'));
console.log('_dumpAll', ambulanceCollection._dumpAll());
console.log('getObjs(0,8):', ambulanceCollection.getObjs(0, 8));
console.log('getObjs filtered calls in 2025-04-01..2025-06-30:', ambulanceCollection.getObjs(0, 50, { type: 'call', dateFrom: '2025-04-01', dateTo: '2025-06-30' }));
console.log('Employees in brigade Б-01:', ambulanceCollection.getObjs(0, 50, { type: 'employee', brigade: 'Б-01' }));
console.groupEnd();