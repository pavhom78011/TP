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
  _storageKey = 'ambulance_system_data';

  constructor(objs = []) {
    if (!Array.isArray(objs)) throw new Error('Constructor expects array');
    this._objs = [];
    const restored = this.restore();
    if (restored && restored.length > 0) {
      this.addAll(restored);
    } else {
      this.addAll(objs);
      this.save();
    }
  }

  save() {
    try {
      const data = JSON.stringify(this._objs);
      localStorage.setItem(this._storageKey, data);
      return true;
    } catch (e) {
      console.error('Ошибка сохранения в localStorage:', e);
      return false;
    }
  }

  restore() {
    try {
      const data = localStorage.getItem(this._storageKey);
      if (data) {
        const parsed = JSON.parse(data);
        return parsed.map(obj => {
          if (obj.createdAt) obj.createdAt = new Date(obj.createdAt);
          if (obj.dateTime) obj.dateTime = new Date(obj.dateTime);
          if (obj.arrivalTime) obj.arrivalTime = new Date(obj.arrivalTime);
          return obj;
        });
      }
    } catch (e) {
      console.error('Ошибка восстановления из localStorage:', e);
    }
    return null;
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
      clone.createdAt = new Date(normalized.createdAt);
      if (normalized.dateTime) clone.dateTime = new Date(normalized.dateTime);
      if (normalized.arrivalTime) clone.arrivalTime = normalized.arrivalTime ? new Date(normalized.arrivalTime) : null;
      this._objs.push(clone);
      this.save();
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
    localStorage.removeItem(this._storageKey);
    return true;
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
    this.save();
    return true;
  }

  editObj(id, objPatch) {
    if (!id || typeof objPatch !== 'object' || objPatch === null) return { ok: false, reason: 'invalid_params' };
    const idx = this._objs.findIndex(o => o.id === id);
    if (idx === -1) return { ok: false, reason: 'not_found' };
    const target = Object.assign({}, this._objs[idx]);

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
    this.save();
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
        if (filterConfig.searchText) {
          const search = filterConfig.searchText.toLowerCase();
          const matches = 
            (obj.fullName && obj.fullName.toLowerCase().includes(search)) ||
            (obj.description && obj.description.toLowerCase().includes(search)) ||
            (obj.address && obj.address.toLowerCase().includes(search)) ||
            (obj.patientName && obj.patientName.toLowerCase().includes(search));
          if (!matches) return false;
        }

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

  getStats() {
    const all = this._objs;
    return {
      total: all.length,
      calls: all.filter(o => o.type === 'call').length,
      employees: all.filter(o => o.type === 'employee').length,
      orders: all.filter(o => o.type === 'order').length,
      brigades: [...new Set(all.map(o => o.brigade).filter(Boolean))].length
    };
  }
}

const ambulanceCollection = new AmbulanceCollection(initialObjs);
console.group('AmbulanceCollection');
console.log('_dumpAll', ambulanceCollection._dumpAll());
console.log('getObjs(0,8):', ambulanceCollection.getObjs(0, 8));
console.log('getObjs filtered calls in 2025-04-01..2025-06-30:', ambulanceCollection.getObjs(0, 50, { type: 'call', dateFrom: '2025-04-01', dateTo: '2025-06-30' }));
console.log('Employees in brigade Б-01:', ambulanceCollection.getObjs(0, 50, { type: 'employee', brigade: 'Б-01' }));
const validEmployee = {
  id: 'test-emp01',
  description: 'Тестовый сотрудник',
  createdAt: new Date(),
  author: 'Тест',
  type: 'employee',
  staffNumber: '9999',
  fullName: 'Тестов Тест Тестович',
  position: 'Врач',
  shiftStart: '2024-01-01',
  brigade: 'Б-99',
  phones: ['+375291112233']
};
const validCall = {
  id: 'test-call',
  description: 'Тестовый вызов',
  createdAt: new Date(),
  author: 'Диспетчер',
  type: 'call',
  dateTime: new Date(),
  brigade: 'Б-01',
  address: 'ул. Тестовая, 1',
  patientName: 'Пациент',
  measures: 'Оказана помощь',
  arrivalTime: new Date(),
  status: 'closed',
  crew: []
};
console.log('addObj', ambulanceCollection.addObj(validEmployee));
console.log('_dumpAll', ambulanceCollection._dumpAll());
console.log('removeObj', ambulanceCollection.removeObj('test-emp01'));
console.log('_dumpAll', ambulanceCollection._dumpAll());
console.groupEnd();

class AmbulanceView {
  constructor() {
    this.userDisplay = document.getElementById('user-display');
    this.callsContainer = document.getElementById('calls-data');
    this.staffContainer = document.getElementById('staff-list');
    this.ordersContainer = document.getElementById('orders-list');
    this.statsElements = {
      brigades: document.getElementById('brigades-count'),
      staff: document.getElementById('staff-count'),
      todayCalls: document.getElementById('today-calls'),
      totalRecords: document.getElementById('total-records'),
      callsCount: document.getElementById('calls-count'),
      employeesCount: document.getElementById('employees-count'),
      ordersCount: document.getElementById('orders-count')
    };

    this.requiredFields = {
      call: ['call-datetime', 'call-brigade', 'call-address', 'call-measures'],
      employee: ['emp-staff-number', 'emp-fullname', 'emp-position', 'emp-shift-start'],
      order: ['order-number', 'order-date', 'order-description']
    };

    this._removeAllRequiredAttributes();
  }

  _removeAllRequiredAttributes() {
    Object.values(this.requiredFields).flat().forEach(fieldId => {
      const field = document.getElementById(fieldId);
      if (field) {
        field.removeAttribute('required');
      }
    });
  }

  formatDate(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }

  renderUser(username) {
    if (username) {
      this.userDisplay.textContent = `Пользователь: ${username}`;
      this.userDisplay.style.color = 'var(--accent)';
    } else {
      this.userDisplay.textContent = 'Гость';
      this.userDisplay.style.color = 'var(--muted)';
    }
  }

  renderStats(stats) {
    if (this.statsElements.brigades) this.statsElements.brigades.textContent = stats.brigades;
    if (this.statsElements.staff) this.statsElements.staff.textContent = stats.employees;
    if (this.statsElements.todayCalls) {
      const today = new Date().toDateString();
      const todayCalls = stats.calls;
      this.statsElements.todayCalls.textContent = todayCalls;
    }
    if (this.statsElements.totalRecords) this.statsElements.totalRecords.textContent = stats.total;
    if (this.statsElements.callsCount) this.statsElements.callsCount.textContent = stats.calls;
    if (this.statsElements.employeesCount) this.statsElements.employeesCount.textContent = stats.employees;
    if (this.statsElements.ordersCount) this.statsElements.ordersCount.textContent = stats.orders;
  }

  renderCalls(calls, currentUser, hasMore = false) {
    this.callsContainer.innerHTML = '';
    
    if (calls.length === 0) {
      this.callsContainer.innerHTML = '<div class="row" style="padding: 30px; text-align: center; color: var(--muted);">Нет данных для отображения</div>';
      return;
    }

    calls.forEach(call => {
      const row = document.createElement('div');
      row.className = 'row';
      row.setAttribute('data-id', call.id);
      
      const actionsHtml = currentUser ? `
        <button class="btn small" data-action="edit" data-id="${call.id}">Ред.</button>
        <button class="btn small danger" data-action="delete" data-id="${call.id}">Уд.</button>
      ` : '<span style="color:var(--muted); font-size:0.8em;">Нет прав</span>';

      row.innerHTML = `
        <div class="cell">${call.id}</div>
        <div class="cell">${this.formatDate(call.dateTime)}</div>
        <div class="cell">${call.brigade}</div>
        <div class="cell">${call.address}</div>
        <div class="cell">${call.patientName || 'Нет данных'}</div>
        <div class="cell">
          <span class="status-badge ${call.status === 'hospitalized' ? 'hospitalized' : 'closed'}">
            ${call.status === 'hospitalized' ? 'Госпитализация' : 'Закрыт'}
          </span>
        </div>
        <div class="cell actions">${actionsHtml}</div>
      `;
      this.callsContainer.appendChild(row);
    });

    const loadMoreBtn = document.getElementById('load-more-calls');
    if (loadMoreBtn) {
      loadMoreBtn.style.display = hasMore ? 'block' : 'none';
    }
  }

  renderStaff(employees, currentUser) {
    this.staffContainer.innerHTML = '';
    
    if (employees.length === 0) {
      this.staffContainer.innerHTML = '<div style="padding: 30px; text-align: center; color: var(--muted);">Сотрудники не найдены</div>';
      return;
    }

    employees.forEach(emp => {
      const card = document.createElement('article');
      card.className = 'card';
      card.setAttribute('data-id', emp.id);
      
      const actions = currentUser ? `
        <div class="card-actions">
          <button class="btn small" data-action="edit" data-id="${emp.id}">Редактировать</button>
          <button class="btn small danger" data-action="delete" data-id="${emp.id}">Удалить</button>
        </div>` : '';

      card.innerHTML = `
        <div class="card-head">
          <h4>${emp.fullName}</h4>
          <div class="meta"><span>${emp.position} · Таб.№ ${emp.staffNumber}</span></div>
        </div>
        <div class="card-body">
          <p><strong>Бригада:</strong> ${emp.brigade || 'Не назначена'}</p>
          <p><strong>Дата начала:</strong> ${emp.shiftStart}</p>
          <p class="muted"><strong>Телефоны:</strong> ${emp.phones && emp.phones.length > 0 ? emp.phones.join(', ') : 'Не указаны'}</p>
        </div>
        ${actions}
      `;
      this.staffContainer.appendChild(card);
    });
  }

  renderOrders(orders) {
    this.ordersContainer.innerHTML = '';
    
    if (orders.length === 0) {
      this.ordersContainer.innerHTML = '<div style="padding: 30px; text-align: center; color: var(--muted);">Приказы не найдены</div>';
      return;
    }

    orders.forEach(ord => {
      const div = document.createElement('article');
      div.className = 'card';
      div.setAttribute('data-id', ord.id);
      div.innerHTML = `
        <h4>Приказ №${ord.orderNumber} от ${ord.orderDate}</h4>
        <p>${ord.description}</p>
        ${ord.positions && ord.positions.length > 0 ? `
          <div style="margin-top: 10px; font-size: 14px; color: var(--muted);">
            <strong>Позиции:</strong>
            <ul style="margin: 5px 0; padding-left: 20px;">
              ${ord.positions.map(pos => `<li>${pos.fullName} → ${pos.brigade} (${pos.from} - ${pos.to})</li>`).join('')}
            </ul>
          </div>
        ` : ''}
      `;
      this.ordersContainer.appendChild(div);
    });
  }

  showItemForm(type = 'call', data = null) {
    const formSection = document.getElementById('add-edit');
    const itemType = document.getElementById('item-type');
    const itemId = document.getElementById('edit-item-id');
    const description = document.getElementById('item-description');
    itemType.value = type;
    
    document.getElementById('call-fields').style.display = type === 'call' ? 'block' : 'none';
    document.getElementById('employee-fields').style.display = type === 'employee' ? 'block' : 'none';
    document.getElementById('order-fields').style.display = type === 'order' ? 'block' : 'none';
    
    this.updateRequiredAttributes(type);
    
    if (data) {
      itemId.value = data.id;
      description.value = data.description || '';
      
      if (type === 'call') {
        document.getElementById('call-datetime').value = this.formatDateTimeForInput(data.dateTime);
        document.getElementById('call-brigade').value = data.brigade || '';
        document.getElementById('call-address').value = data.address || '';
        document.getElementById('call-patient').value = data.patientName || '';
        document.getElementById('call-measures').value = data.measures || '';
        document.getElementById('call-status').value = data.status || 'closed';
        document.getElementById('call-arrival').value = this.formatDateTimeForInput(data.arrivalTime);
      } else if (type === 'employee') {
        document.getElementById('emp-staff-number').value = data.staffNumber || '';
        document.getElementById('emp-fullname').value = data.fullName || '';
        document.getElementById('emp-position').value = data.position || '';
        document.getElementById('emp-brigade').value = data.brigade || '';
        document.getElementById('emp-shift-start').value = data.shiftStart || '';
        document.getElementById('emp-phones').value = data.phones ? data.phones.join(', ') : '';
      } else if (type === 'order') {
        document.getElementById('order-number').value = data.orderNumber || '';
        document.getElementById('order-date').value = data.orderDate || '';
        document.getElementById('order-description').value = data.description || '';
      }
    } else {
      itemId.value = '';
      description.value = '';
      const today = new Date().toISOString().split('T')[0];
      const now = new Date().toISOString().slice(0, 16);
      
      if (type === 'call') {
        document.getElementById('call-datetime').value = now;
        document.getElementById('call-arrival').value = now;
      } else if (type === 'employee') {
        document.getElementById('emp-shift-start').value = today;
      } else if (type === 'order') {
        document.getElementById('order-date').value = today;
      }
    }
    
    formSection.style.display = 'block';
    formSection.scrollIntoView({ behavior: 'smooth' });
  }

  updateRequiredAttributes(type) {
    this._removeAllRequiredAttributes();
    
    if (type && this.requiredFields[type]) {
      this.requiredFields[type].forEach(fieldId => {
        const field = document.getElementById(fieldId);
        if (field) {
          field.setAttribute('required', 'required');
        }
      });
    }
  }

  hideItemForm() {
    const formSection = document.getElementById('add-edit');
    formSection.style.display = 'none';
    document.getElementById('item-form').reset();
    document.getElementById('edit-item-id').value = '';
  }

  showAuthModal() {
    document.getElementById('auth-modal').style.display = 'flex';
  }

  hideAuthModal() {
    document.getElementById('auth-modal').style.display = 'none';
    document.getElementById('auth-form').reset();
  }

  showReport(content) {
    const reportResult = document.getElementById('report-result');
    reportResult.innerHTML = content;
    reportResult.style.display = 'block';
  }

  showNotification(message, type = 'info') {
    const container = document.querySelector('.notification-container') || this.createNotificationContainer();
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    container.appendChild(notification);
    
    setTimeout(() => {
      notification.style.animation = 'slideOut 0.3s ease-out';
      setTimeout(() => notification.remove(), 300);
    }, 5000);
  }

  createNotificationContainer() {
    const container = document.createElement('div');
    container.className = 'notification-container';
    document.body.appendChild(container);
    return container;
  }

  formatDateTimeForInput(date) {
    if (!date) return '';
    const d = new Date(date);
    return d.toISOString().slice(0, 16);
  }
}

class AmbulanceController {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    this.currentUser = localStorage.getItem('ambulance_user') || null;
    this.currentPage = 0;
    this.pageSize = 10;
    this.currentFilter = { type: 'call' };
    this.currentSearch = '';
    this.init();
  }

  init() {
    this.bindEvents();
    this.updateAllViews();
  }

  bindEvents() {
    document.getElementById('openAuth').addEventListener('click', () => this.showAuth());
    document.getElementById('cancel-auth').addEventListener('click', () => this.view.hideAuthModal());
    document.getElementById('auth-form').addEventListener('submit', (e) => this.handleAuth(e));

    document.querySelector('.filter-form').addEventListener('submit', (e) => this.handleFilter(e));
    document.getElementById('clear-filter').addEventListener('click', () => this.clearFilter());

    document.getElementById('staff-search').addEventListener('input', (e) => this.handleStaffSearch(e));

    document.querySelectorAll('[data-action="new-call"]').forEach(btn => 
      btn.addEventListener('click', () => this.showItemForm('call')));
    document.querySelectorAll('[data-action="add-employee"]').forEach(btn => 
      btn.addEventListener('click', () => this.showItemForm('employee')));
    document.querySelectorAll('[data-action="create-order"]').forEach(btn => 
      btn.addEventListener('click', () => this.showItemForm('order')));

    document.getElementById('item-form').addEventListener('submit', (e) => this.handleItemSubmit(e));
    document.getElementById('cancel-edit').addEventListener('click', () => this.view.hideItemForm());
    document.getElementById('item-type').addEventListener('change', (e) => this.handleTypeChange(e));

    document.getElementById('report-form').addEventListener('submit', (e) => this.handleReport(e));

    document.getElementById('export-data').addEventListener('click', () => this.exportData());
    document.getElementById('import-data').addEventListener('click', () => this.importData());
    document.getElementById('clear-data').addEventListener('click', () => this.clearAllData());

    document.getElementById('load-more-calls').addEventListener('click', () => this.loadMoreCalls());

    document.addEventListener('click', (e) => this.handleDynamicActions(e));
  }

  handleDynamicActions(e) {
    const target = e.target;
    const action = target.getAttribute('data-action');
    const id = target.getAttribute('data-id');
    
    if (!action || !id) return;
    
    if (action === 'edit') {
      this.editItem(id);
    } else if (action === 'delete') {
      if (confirm('Вы уверены, что хотите удалить этот элемент?')) {
        this.deleteItem(id);
      }
    }
  }

  showAuth() {
    if (this.currentUser) {
      this.logout();
    } else {
      this.view.showAuthModal();
    }
  }

  handleAuth(e) {
    e.preventDefault();
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    if (username && password) {
      this.currentUser = username;
      localStorage.setItem('ambulance_user', username);
      this.view.hideAuthModal();
      this.updateAllViews();
      this.view.showNotification(`Вход выполнен как ${username}`, 'success');
    } else {
      this.view.showNotification('Введите логин и пароль', 'error');
    }
  }

  logout() {
    this.currentUser = null;
    localStorage.removeItem('ambulance_user');
    this.updateAllViews();
    this.view.showNotification('Выход выполнен', 'info');
  }

  handleFilter(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    this.currentFilter = { type: 'call' };
    this.currentPage = 0;
    
    if (formData.get('dateFrom')) this.currentFilter.dateFrom = formData.get('dateFrom');
    if (formData.get('dateTo')) this.currentFilter.dateTo = formData.get('dateTo');
    if (formData.get('brigade')) this.currentFilter.brigade = formData.get('brigade');
    if (formData.get('status')) this.currentFilter.status = formData.get('status');
    
    this.updateCallsView();
  }

  clearFilter() {
    this.currentFilter = { type: 'call' };
    this.currentPage = 0;
    document.querySelector('.filter-form').reset();
    this.updateCallsView();
  }

  handleStaffSearch(e) {
    this.currentSearch = e.target.value;
    this.updateStaffView();
  }

  showItemForm(type, id = null) {
    if (!this.currentUser) {
      this.view.showNotification('Требуется авторизация', 'error');
      this.showAuth();
      return;
    }
    
    if (id) {
      const item = this.model.getObj(id);
      if (item) {
        this.view.showItemForm(type, item);
      }
    } else {
      this.view.showItemForm(type);
    }
  }

  handleTypeChange(e) {
    const type = e.target.value;
    if (!type) return;
    
    document.getElementById('call-fields').style.display = type === 'call' ? 'block' : 'none';
    document.getElementById('employee-fields').style.display = type === 'employee' ? 'block' : 'none';
    document.getElementById('order-fields').style.display = type === 'order' ? 'block' : 'none';
    
    this.view.updateRequiredAttributes(type);
  }

handleItemSubmit(e) {
    e.preventDefault();
    if (!this.currentUser) {
        this.view.showNotification('Требуется авторизация', 'error');
        return;
    }
    
    const type = document.getElementById('item-type').value;
    const id = document.getElementById('edit-item-id').value;
    const description = document.getElementById('item-description').value;
    
    if (!type) {
        this.view.showNotification('Выберите тип записи', 'error');
        return;
    }
    
    if (!description || description.trim() === '') {
        this.view.showNotification('Заполните краткое описание', 'error');
        document.getElementById('item-description').focus();
        return;
    }
    
    let validationPassed = true;
    
    if (type === 'call') {
        const requiredFields = ['call-datetime', 'call-brigade', 'call-address', 'call-measures'];
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field && (!field.value || field.value.trim() === '')) {
                field.classList.add('error');
                validationPassed = false;
            } else if (field) {
                field.classList.remove('error');
            }
        });
    } else if (type === 'employee') {
        const requiredFields = ['emp-staff-number', 'emp-fullname', 'emp-position', 'emp-shift-start'];
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field && (!field.value || field.value.trim() === '')) {
                field.classList.add('error');
                validationPassed = false;
            } else if (field) {
                field.classList.remove('error');
            }
        });
    } else if (type === 'order') {
        const requiredFields = ['order-number', 'order-date', 'order-description'];
        requiredFields.forEach(fieldId => {
            const field = document.getElementById(fieldId);
            if (field && (!field.value || field.value.trim() === '')) {
                field.classList.add('error');
                validationPassed = false;
            } else if (field) {
                field.classList.remove('error');
            }
        });
    }
    
    if (!validationPassed) {
        this.view.showNotification('Заполните все обязательные поля', 'error');
        return;
    }
    
    let itemData = {
        type,
        description,
        photoLink: ''
    };

    if (!id) {
        itemData.createdAt = new Date();
        itemData.author = this.currentUser;
    }
    
    if (type === 'call') {
        itemData.id = id || `call-${Date.now()}`;
        itemData.dateTime = new Date(document.getElementById('call-datetime').value);
        itemData.brigade = document.getElementById('call-brigade').value;
        itemData.address = document.getElementById('call-address').value;
        itemData.patientName = document.getElementById('call-patient').value;
        itemData.measures = document.getElementById('call-measures').value;
        itemData.status = document.getElementById('call-status').value;
        itemData.arrivalTime = new Date(document.getElementById('call-arrival').value);
        itemData.crew = [];
        itemData.hospitalSent = null;
    } else if (type === 'employee') {
        itemData.id = id || `emp-${Date.now()}`;
        itemData.staffNumber = document.getElementById('emp-staff-number').value;
        itemData.fullName = document.getElementById('emp-fullname').value;
        itemData.position = document.getElementById('emp-position').value;
        itemData.brigade = document.getElementById('emp-brigade').value;
        itemData.shiftStart = document.getElementById('emp-shift-start').value;
        const phones = document.getElementById('emp-phones').value;
        itemData.phones = phones ? phones.split(',').map(p => p.trim()).filter(p => p) : [];
    } else if (type === 'order') {
        itemData.id = id || `ord-${Date.now()}`;
        itemData.orderNumber = document.getElementById('order-number').value;
        itemData.orderDate = document.getElementById('order-date').value;
        itemData.positions = [];
    }
    
    let result;
    if (id) {
        result = this.model.editObj(id, itemData);
    } else {
        result = this.model.addObj(itemData);
    }
    
    if (result.ok) {
        this.view.hideItemForm();
        this.updateAllViews();
        this.view.showNotification(id ? 'Данные обновлены' : 'Запись добавлена', 'success');
    } else {
        this.view.showNotification(`Ошибка: ${result.reason}`, 'error');
    }
  }

  editItem(id) {
    const item = this.model.getObj(id);
    if (item) {
      this.showItemForm(item.type, id);
    }
  }

  deleteItem(id) {
    if (!this.currentUser) {
      this.view.showNotification('Требуется авторизация', 'error');
      return;
    }
    
    const success = this.model.removeObj(id);
    if (success) {
      this.updateAllViews();
      this.view.showNotification('Запись удалена', 'success');
    } else {
      this.view.showNotification('Ошибка удаления', 'error');
    }
  }

  loadMoreCalls() {
    this.currentPage++;
    this.updateCallsView();
  }

  updateCallsView() {
    const skip = this.currentPage * this.pageSize;
    const calls = this.model.getObjs(0, skip + this.pageSize + 1, this.currentFilter);
    const hasMore = calls.length > (skip + this.pageSize);
    const displayCalls = calls.slice(0, skip + this.pageSize);
    
    this.view.renderCalls(displayCalls, this.currentUser, hasMore);
  }

  updateStaffView() {
    const filter = { type: 'employee' };
    if (this.currentSearch) {
      filter.searchText = this.currentSearch;
    }
    const staff = this.model.getObjs(0, 100, filter);
    this.view.renderStaff(staff, this.currentUser);
  }

  updateAllViews() {
    this.view.renderUser(this.currentUser);
    this.updateCallsView();
    this.updateStaffView();
    
    const orders = this.model.getObjs(0, 100, { type: 'order' });
    this.view.renderOrders(orders);
    
    const stats = this.model.getStats();
    this.view.renderStats(stats);
  }

  handleReport(e) {
    e.preventDefault();
    const date = document.getElementById('report-date').value;
    const type = document.getElementById('report-type').value;
    
    if (!date || !type) {
      this.view.showNotification('Заполните все поля', 'error');
      return;
    }
    
    let reportContent = '';
    const reportDate = new Date(date);
    
    if (type === 'calls-list') {
      const calls = this.model.getObjs(0, 100, { type: 'call' }).filter(call => {
        const callDate = new Date(call.dateTime);
        return callDate.toDateString() === reportDate.toDateString();
      });
      
      reportContent = `<h4>Список вызовов за ${date} (${calls.length}):</h4>`;
      if (calls.length === 0) {
        reportContent += '<p>На выбранную дату вызовов не было.</p>';
      } else {
        calls.forEach(call => {
          reportContent += `
            <div class="report-item">
              <strong>${call.id}</strong> - ${this.view.formatDate(call.dateTime)}<br>
              Бригада: ${call.brigade}, Адрес: ${call.address}<br>
              Пациент: ${call.patientName || 'Не указан'}<br>
              Меры: ${call.measures}
            </div>
          `;
        });
      }
    } else if (type === 'longest-call') {
      const calls = this.model.getObjs(0, 100, { type: 'call' }).filter(call => {
        const callDate = new Date(call.dateTime);
        return callDate.toDateString() === reportDate.toDateString();
      });
      
      if (calls.length === 0) {
        reportContent = '<p>На выбранную дату вызовов не было.</p>';
      } else {
        const longestCall = calls.reduce((longest, call) => {
          const duration = new Date(call.arrivalTime) - new Date(call.dateTime);
          return duration > longest.duration ? { call, duration } : longest;
        }, { call: null, duration: 0 });
        
        const minutes = Math.floor(longestCall.duration / 60000);
        reportContent = `
          <h4>Самый длительный вызов за ${date}:</h4>
          <div class="report-item">
            <strong>${longestCall.call.id}</strong> - ${minutes} минут<br>
            Бригада: ${longestCall.call.brigade}<br>
            Адрес: ${longestCall.call.address}<br>
            Пациент: ${longestCall.call.patientName || 'Не указан'}<br>
            Меры: ${longestCall.call.measures}<br>
            Время прибытия: ${this.view.formatDate(longestCall.call.arrivalTime)}
          </div>
        `;
      }
    } else if (type === 'brigade-staff') {
      const employees = this.model.getObjs(0, 100, { type: 'employee' });
      const brigades = [...new Set(employees.map(emp => emp.brigade).filter(Boolean))];
      
      reportContent = `<h4>Составы бригад на ${date}:</h4>`;
      brigades.forEach(brigade => {
        const brigadeEmployees = employees.filter(emp => emp.brigade === brigade);
        reportContent += `
          <div class="report-item">
            <strong>Бригада ${brigade}:</strong> (${brigadeEmployees.length} сотрудников)<br>
            ${brigadeEmployees.map(emp => 
              `${emp.fullName} - ${emp.position} (таб. №${emp.staffNumber})`
            ).join('<br>')}
          </div>
        `;
      });
    }
    
    this.view.showReport(reportContent);
  }

  exportData() {
    const data = this.model._dumpAll();
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'ambulance_data_export.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    this.view.showNotification('Данные экспортированы', 'success');
  }

  importData() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = (e) => {
      const file = e.target.files[0];
      const reader = new FileReader();
      
      reader.onload = (event) => {
        try {
          const data = JSON.parse(event.target.result);
          if (confirm(`Импортировать ${data.length} записей? Существующие данные будут сохранены.`)) {
            const rejections = this.model.addAll(data);
            this.updateAllViews();
            if (rejections.length === 0) {
              this.view.showNotification(`Импортировано ${data.length} записей`, 'success');
            } else {
              this.view.showNotification(`Импортировано ${data.length - rejections.length} из ${data.length} записей`, 'warning');
            }
          }
        } catch (error) {
          this.view.showNotification('Ошибка чтения файла', 'error');
        }
      };
      
      reader.readAsText(file);
    };
    
    input.click();
  }

  clearAllData() {
    if (confirm('Вы уверены, что хотите удалить все данные? Это действие нельзя отменить.')) {
      this.model.clear();
      this.currentPage = 0;
      this.currentFilter = { type: 'call' };
      this.currentSearch = '';
      this.updateAllViews();
      this.view.showNotification('Все данные удалены', 'success');
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  console.log(' АИС "Скорая помощь" запущена');

  const model = new AmbulanceCollection(initialObjs);
  const view = new AmbulanceView();
  const controller = new AmbulanceController(model, view);

  window.ambulanceModel = model;
  window.ambulanceController = controller;

  window.addObj = (obj) => {
    const result = model.addObj(obj);
    if (result.ok) {
      console.log('Объект добавлен:', obj);
      controller.updateAllViews();
    } else {
      console.error('Ошибка добавления:', result.reason);
    }
  };
  
  window.removeObj = (id) => {
    const res = model.removeObj(id);
    if (res) {
      console.log(`Объект ${id} удален.`);
      controller.updateAllViews();
    } else {
      console.error(`Объект ${id} не найден.`);
    }
  };
  
  window.editObj = (id, newProps) => {
    const res = model.editObj(id, newProps);
    if (res.ok) {
      console.log(`Объект ${id} обновлен.`);
      controller.updateAllViews();
    } else {
      console.error(`Ошибка обновления ${id}: ${res.reason}`);
    }
  };
  
  window.login = (name) => {
    controller.currentUser = name;
    localStorage.setItem('ambulance_user', name);
    controller.updateAllViews();
    console.log(`Вход выполнен как: ${name}`);
  };
  
  window.logout = () => {
    controller.currentUser = null;
    localStorage.removeItem('ambulance_user');
    controller.updateAllViews();
    console.log('Выход выполнен');
  };
  
  window.filterCalls = (criteria) => {
    controller.currentFilter = { ...criteria, type: 'call' };
    controller.currentPage = 0;
    controller.updateCallsView();
    console.log('Применен фильтр:', controller.currentFilter);
  };
});

/* addObj({
  id: 'test-call-01',
  description: 'Тестовый вызов из консоли',
  createdAt: new Date(),
  author: 'Тестер',
  type: 'call',
  dateTime: new Date(),
  brigade: 'Б-99',
  address: 'ул. Тестовая, 1',
  patientName: 'Тестов Тест Тестович',
  measures: 'Тестовые мероприятия',
  arrivalTime: new Date(),
  status: 'closed',
  crew: []
});

addObj({
  id: 'test-emp-01',
  description: 'Тестовый сотрудник',
  createdAt: new Date(),
  author: 'Тестер',
  type: 'employee',
  staffNumber: '9999',
  fullName: 'Тестов Тест Тестович',
  position: 'Врач',
  shiftStart: '2024-01-01',
  brigade: 'Б-99',
  phones: ['+375291112233']
});

addObj({
  id: 'test-ord-01',
  description: 'Тестовый приказ',
  createdAt: new Date(),
  author: 'Тестер',
  type: 'order',
  orderNumber: '999',
  orderDate: '2024-01-01',
  positions: []
});

removeObj('test-call-01');

removeObj('emp-001');

removeObj('non-existent-id');

editObj('call-001', {description: 'Новое описание вызова - падение с высоты'});

editObj('emp-002', {brigade: 'Б-99', position: 'Старший фельдшер'});

editObj('ord-045', {description: 'Приказ №45: новое назначение'});

login('admin');

login('Диспетчер-1');

login('Отдел кадров');

logout();

filterCalls({dateFrom: '2025-05-01', dateTo: '2025-05-31'});

filterCalls({brigade: 'Б-01'});

filterCalls({status: 'hospitalized'});

filterCalls({brigade: 'Б-02', dateFrom: '2025-04-01', dateTo: '2025-06-01', status: 'closed'});

filterCalls({}); */