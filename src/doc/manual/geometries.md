## Геометрии

{toc}

### Описание
В данном разделе рассматривается работа с геометрическими фигурами: кругами, ломаными линиями, многоугольниками.

### Класс DG.Path

Абстрактный класс, содержащий опции и константы векторных слоев (Polygon, Polyline, Circle). Никогда не используется напрямую.

#### Опции
<table>
    <thead>
        <tr>
            <th>Опция</th>
            <th>Тип</th>
            <th>По умолчанию</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>stroke</b></code></td>
            <td><code>Boolean</code></td>
            <td><code>true</code></td>
            <td>Рисовать ли границу фигуры. Установите значение в <code>false</code>, чтобы отключить границы многоугольников или кругов.</td>
        </tr>
        <tr>
            <td><code><b>color</b></code></td>
            <td><code>String</code></td>
            <td><code>'#03f'</code></td>
            <td>Цвет границы.</td>
        </tr>
        <tr>
            <td><code><b>weight</b></code></td>
            <td><code>Number</code></td>
            <td><code>5</code></td>
            <td>Ширина границы в пикселях.</td>
        </tr>
        <tr>
            <td><code><b>opacity</b></code></td>
            <td><code>Number</code></td>
            <td><code>0.5</code></td>
            <td>Прозрачность границы.</td>
        </tr>
        <tr>
            <td><code><b>fill</b></code></td>
            <td><code>Boolean</code></td>
            <td>depends</td>
            <td>Заполнять ли геометрии цветом. Установите значение в <code>false</code>, чтобы отключить заполнение многоугольников или кругов.</td>
        </tr>
        <tr>
            <td><code><b>fillColor</b></code></td>
            <td><code>String</code></td>
            <td>такой же, как <code>color</code></td>
            <td>Цвет заливки.</td>
        </tr>
        <tr>
            <td><code><b>fillOpacity</b></code></td>
            <td><code>Number</code></td>
            <td><code>0.2</code></td>
            <td>Прозрачность заливки.</td>
        </tr>
        <tr>
            <td><code><b>dashArray</b></code></td>
            <td><code>String</code></td>
            <td><code>null</code></td>
            <td>Строка <a target="_blank" href="https://developer.mozilla.org/en/SVG/Attribute/stroke-dasharray">шаблона границы</a>. Не работает на canvas слоях (например, Android 2).</td>
        </tr>
        <tr>
            <td><code><b>lineCap</b></code></td>
            <td><code>String</code></td>
            <td><code>null</code></td>
            <td>Определяет <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linecap">фигуру, которая будет использована как наконечник геометрии</a>, если у нее задана граница (stroke).</td>
        </tr>
        <tr>
            <td><code><b>lineJoin</b></code></td>
            <td><code>String</code></td>
            <td><code>null</code></td>
            <td>Определяет <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/stroke-linejoin">фигуру, которая будет использована на углах изгибов</a> геометрии, если у нее задана граница (stroke).</td>
        </tr>
        <tr>
            <td><code><b>clickable</b></code></td>
            <td><code>Boolean</code></td>
            <td><code>true</code></td>
            <td>Если установлено значение <code>false</code>, тогда события мышки геометрии не обрабатываются.</td>
        </tr>
        <tr>
            <td><code><b>pointerEvents</b></code></td>
            <td><code>String</code></td>
            <td><code><span class="literal">null</span></code></td>
            <td>Устанавливает геометрии атрибут <code>pointer-events</code>, если для отрисовки используется SVG.</td>
        </tr>
        <tr>
            <td><code><b>className</b></code></td>
            <td><code>String</code></td>
            <td><code>''</code></td>
            <td>Добавляет класс в соотвествующий атрибут элемента.</td>
        </tr>
    </tbody>
</table>

#### События

Вы можете подписаться на следующие события используя [эти методы](/doc/maps/2.0/manual/events#методы-управления-событиями).
<table>
    <thead>
        <tr>
            <th>Событие</th>
            <th>Данные</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>click</b></code></td>
            <td><code><a href="/doc/maps/2.0/manual/events#mouseevent">MouseEvent</a></code>
            <td>Вызывается при клике на объект.</td>
        </tr>
        <tr>
            <td><code><b>dblclick</b></code></td>
            <td><code><a href="/doc/maps/2.0/manual/events#mouseevent">MouseEvent</a></code>
            <td>Вызывается при двойном клике на объект.</td>
        </tr>
        <tr>
            <td><code><b>mousedown</b></code></td>
            <td><code><a href="/doc/maps/2.0/manual/events#mouseevent">MouseEvent</a></code>
            <td>Вызывается когда пользователь нажимает кнопку мышки на объекте.</td>
        </tr>
        <tr>
            <td><code><b>mouseover</b></code></td>
            <td><code><a href="/doc/maps/2.0/manual/events#mouseevent">MouseEvent</a></code>
            <td>Вызывается при наведении курсора мышки на объект.</td>
        </tr>
        <tr>
            <td><code><b>mouseout</b></code></td>
            <td><code><a href="/doc/maps/2.0/manual/events#mouseevent">MouseEvent</a></code>
            <td>Вызывается когда курсор мышки покидает область объекта.</td>
        </tr>
        <tr>
            <td><code><b>contextmenu</b></code></td>
            <td><code><a href="/doc/maps/2.0/manual/events#mouseevent">MouseEvent</a></code>
            <td>Вызывается при нажатии правой кнопкой мышки на объекте, предотвращает появление стандартного контекстного меню браузера.</td>
        </tr>
        <tr>
            <td><code><b>add</b></code></td>
            <td><code><a href="/doc/maps/2.0/manual/events#event">Event</a></code>
            <td>Вызывается при добавлении геометрии на карту.</td>
        </tr>
        <tr>
            <td><code><b>remove</b></code></td>
            <td><code><a href="/doc/maps/2.0/manual/events#event">Event</a></code>
            <td>Вызывается при удалении геометрии с карты.</td>
        </tr>
        <tr>
            <td><code><b>popupopen</b></code></td>
            <td><code><a href="/doc/maps/2.0/manual/events#popupevent">PopupEvent</a></code></td>
            <td>Вызывается при открытии прикрепленного к геометрии балуна.</td>
        </tr>
        <tr>
            <td><code><b>popupclose</b></code></td>
            <td><code><a href="/doc/maps/2.0/manual/events#popupevent">PopupEvent</a></code></td>
            <td>Вызывается при закрытии прикрепленного к геометрии балуна.</td>
        </tr>
    </tbody>
</table>

#### Методы
<table>
    <thead>
        <tr>
            <th>Метод</th>
            <th>Возвращает</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>addTo</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/map#описание">Map</a>&gt; <i>map</i> )</nobr>
            </code></td>
            <td><code>this</code></td>
            <td>Добавляет слой на карту.</td>
        </tr>
        <tr id="path-bindpopup">
            <td><code><b>bindPopup</b>(
                <nobr>&lt;String&gt; <i>html</i> |</nobr> <nobr>&lt;HTMLElement&gt; <i>el</i> |</nobr> <nobr>&lt;<a href="/doc/maps/2.0/manual/popups#описание">Popup</a>&gt; <i>popup</i>,</nobr>
                <nobr>&lt;<a href="/doc/maps/2.0/manual/popups#опции">Popup options</a>&gt; <i>options?</i> )</nobr>
            </code></td>
            <td><code>this</code></td>
            <td>Привязывает к геометрии балун с HTML содержимым, который будет показан при клике.</td>
        </tr>
        <tr id="path-unbindpopup">
            <td><code><b>unbindPopup</b>()</code></td>
            <td><code>this</code></td>
            <td>Отключает отображение балуна при клике на геометрию.</td>
        </tr>
        <tr id="path-openpopup">
            <td><code><b>openPopup</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>&gt; <i>latlng?</i> )</nobr>
            </code></td>
            <td><code>this</code></td>
            <td>Открывает балун, предварительно привязанный методом <a href="#path-bindpopup">bindPopup</a> в указанной точке.</td>
        </tr>
        <tr>
            <td><code><b>getPopup</b>()</code></td>
            <td><code><a href="/doc/maps/2.0/manual/popups#описание">Popup</a></code></td>
            <td>Возвращает балун, предварительно привязанный методом <a href="#path-bindpopup">bindPopup</a>.</td>
        </tr>
        <tr id="path-closepopup">
            <td><code><b>closePopup</b>()</code></td>

            <td><code>this</code></td>
            <td>Закрывает балун, привязанный к геометрии, если тот был открыт.</td>
        </tr>
        <tr id="path-bindlabel">
            <td><code><b>bindLabel</b>(&lt;String&gt; content, &lt;<a href="/doc/maps/2.0/manual/label#опции">Label options</a>&gt; options?)</code></td>
            <td><code>this</code></td>
            <td>Добавляет всплывающую подсказку для геометрии или обновляет содержимое уже созданной.</td>
        </tr>
        <tr id="path-unbindlabel">
            <td><code><b>unbindLabel</b>()</code></td>
            <td><code>this</code></td>
            <td>Отвязывает всплывающую подсказку от геометрии.</td>
        </tr>
        <tr id="path-setstyle">
            <td><code><b>setStyle</b>(
                <nobr>&lt;<a href="#опции">Path options</a>&gt; <i>object</i> )</nobr>
            </code></td>

            <td><code>this</code></td>
            <td>Изменяет внешний вид геометрии указанный в <a href="#опции">опциях класса Path</a>.</td>
        </tr>
        <tr id="path-getbounds">
            <td><code><b>getBounds</b>()</code></td>
            <td><code><a href="/doc/maps/2.0/manual/base-classes#класс-dglatlngbounds">LatLngBounds</a></code></td>
            <td>Возвращает прямоугольные границы геометрии.</td>
        </tr>
        <tr>
            <td><code><b>bringToFront</b>()</code></td>
            <td><code>this</code></td>
            <td>Позиционирует слой поверх всех остальных.</td>
        </tr>
        <tr>
            <td><code><b>bringToBack</b>()</code></td>
            <td><code>this</code></td>
            <td>Позиционирует слой под остальными.</td>
        </tr>
        <tr>
            <td><code><b>redraw</b>()</code></td>
            <td><code>this</code></td>
            <td>Перерисовывает слой. Удобно при изменении координат геометрии.</td>
        </tr>
    </tbody>
</table>

#### Статические свойства
<table>
    <thead>
        <tr>
            <th>Константа</th>
            <th>Тип</th>
            <th>Значение</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>SVG</code></td>
            <td><code>Boolean</code></td>
            <td>depends</td>
            <td>True при рендеринге с использованием SVG (true в большинстве современных браузеров).</td>
        </tr>
        <tr>
            <td><code>VML</code></td>
            <td><code>Boolean</code></td>
            <td>depends</td>
            <td>True при рендеринге с использованием VML (IE 6-8).</td>
        </tr>
        <tr>
            <td><code>CANVAS</code></td>
            <td><code>Boolean</code></td>
            <td>depends</td>
            <td>True при рендеринге с использованием Canvas (Android 2).</td>
        </tr>
        <tr>
            <td><code>CLIP_PADDING</code></td>
            <td><code>Number</code></td>
            <td><nobr><code>0.5</code> для SVG</nobr><br /><nobr><code>0.02</code> для VML</nobr></td>
            <td>Указывает, насколько расширена область обрезания геометрий вокруг текущей области просмотра. Маленькие значения означают, что вы увидите обрезанные геометрии при  перетаскивании, большие понижают скорость отрисовки.</td>
        </tr>
    </tbody>
</table>

### Класс DG.Polyline

Класс для отрисовки ломаных линий на карте. Расширяет [Path](#класс-dgpath).

    // создаем красную ломаную из массива географических точек
    var polyline = DG.polyline(latlngs, {color: 'red'}).addTo(map);

    // подстраиваем центр карты и масштаб так, чтобы ломаную было видно
    map.fitBounds(polyline.getBounds());

#### Конструктор
<table>
    <thead>
        <tr>
            <th>Конструктор</th>
            <th>Использование</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>DG.Polyline</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>[]&gt; <i>latlngs</i></nobr>,
                <nobr>&lt;<a href="#опции-1">Polyline options</a>&gt; <i>options?</i> )</nobr>
            </code></td>

            <td>
                <code>DG.polyline(&hellip;)</code>
            </td>

            <td>Создает объект ломаной по переданному массиву географических точек и необязательному объекту опций.</td>
        </tr>
    </tbody>
</table>

#### Опции

Возможно использование [опций класса Path](#опции) и дополнительных опций:
<table>
    <thead>
        <tr>
            <th>Опция</th>
            <th>Тип</th>
            <th>По умолчанию</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>smoothFactor</b></code></td>
            <td><code>Number</code></td>
            <td><code>1.0</code></td>
            <td>Степень упрощения ломаной на каждом уровне масштаба. Большее значение означает выше производительность и меньшее качество, меньшее значение &mdash; лучшее качество, но ниже производительность.</td>
        </tr>
        <tr>
            <td><code><b>noClip</b></code></td>
            <td><code>Boolean</code></td>
            <td><code>false</code></td>
            <td>Отключает обрезание ломаной.</td>
        </tr>
    </tbody>
</table>

#### Методы

Возможно использование [методов класса Path](#методы) и дополнительных методов:
<table>
    <thead>
        <tr>
            <th>Метод</th>
            <th>Возвращает</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>addLatLng</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>&gt; <i>latlng</i> )</nobr>
            </code></td>
            <td><code>this</code></td>
            <td>Добавляет переданную точку в ломаную.</td>
        </tr>
        <tr>
            <td><code><b>setLatLngs</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>[]&gt; <i>latlngs</i> )</nobr>
            </code></td>
            <td><code>this</code></td>
            <td>Заменяет все точки ломаной массивом переданных географических точек.</td>
        </tr>
        <tr>
            <td><code><b>getLatLngs</b>()</code></td>
            <td><code><a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>[]</code></td>
            <td>Возвращает массив точек геометрии.</td>
        </tr>
        <tr>
            <td><code><b>spliceLatLngs</b>(
                <nobr>&lt;Number&gt; <i>index</i></nobr>,
                <nobr>&lt;Number&gt; <i>pointsToRemove</i></nobr>,
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>&gt; <i>latlng?</i>, &hellip; )</nobr>
            </code></td>
            <td><code><a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>[]</code></td>
            <td>Позволяет добавлять, удалять или заменять точки в ломаной. Синтаксис аналогичен <a target="_blank" href="https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/splice">Array#splice</a>. Возвращает массив удаленных точек.</td>
        </tr>
        <tr id="path-getbounds">
            <td><code><b>getBounds</b>()</code></td>
            <td><code><a href="/doc/maps/2.0/manual/base-classes#класс-dglatlngbounds">LatLngBounds</a></code></td>
            <td>Возвращает границы ломаной.</td>
        </tr>
        <tr id="polyline-togeojson">
            <td><code><b>toGeoJSON</b>()</code></td>
            <td><code>Object</code></td>
            <td>Возвращает <a target="_blank" href="http://en.wikipedia.org/wiki/GeoJSON">GeoJSON</a> представление ломаной (GeoJSON LineString).</td>
        </tr>
    </tbody>
</table>

### Класс DG.MultiPolyline

Расширяет [FeatureGroup](/doc/maps/2.0/manual/groups#класс-dgfeaturegroup) и позволяет создавать мультиполилайны (один слой, содержащий несколько ломаных с общими стилями и балуном).

#### Конструктор
<table>
    <thead>
        <tr>
            <th>Конструктор</th>
            <th>Использование</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>DG.MultiPolyline</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>[][]&gt; <i>latlngs</i></nobr>,
                <nobr>&lt;<a href="#опции-1">Polyline options</a>&gt; <i>options?</i> )</nobr>
            </code></td>

            <td>
                <code>DG.multiPolyline(&hellip;)</code>
            </td>

            <td>Создает объект мультиполилайна по переданному массиву массивов географических точек (каждый для своей ломаной) и необязательному объекту опций.</td>
        </tr>
    </tbody>
</table>

#### Методы

<p>Мультиполилайны содержат все методы класса [Polyline](#класс-dgpolyline)</a>, но их поведение отличается, так как мультиполилайны содержат несколько ломаных.</p>

<table>
    <thead>
        <tr>
            <th>Метод</th>
            <th>Возвращает</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>setLatLngs</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>[][]&gt; <i>latlngs</i> )</nobr>
            </code></td>

            <td><code>this</code></td>
            <td>Заменяет все геометрии ломаных новыми на основе переданного многомерного массива географических координат.</td>
        </tr>
        <tr>
            <td><code><b>getLatLngs</b>()</td>

            <td><code><nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>[][]&gt; <i>latlngs</i></nobr>
            </code></td>
            <td>Возвращает многомерный массив географических координат каждой ломаной.</td>
        </tr>
        <tr>
            <td><code><b>openPopup</b>()</code></td>
            <td><code>this</code></td>
            <td>Открывает балун, предварительно прикрепленный с помощью метода <a href="#path-bindpopup">bindPopup</a>.</td>
        </tr>
        <tr id="multipolyline-togeojson">
            <td><code><b>toGeoJSON</b>()</code></td>
            <td><code>Object</code></td>
            <td>Возвращает <a target="_blank" href="http://en.wikipedia.org/wiki/GeoJSON">GeoJSON</a> представление мультиполилайна (GeoJSON MultiLineString).</td>
        </tr>
    </tbody>
</table>

### Класс DG.Polygon

Класс для отрисовки многоугольников на карте. Расширяет [Polyline](#класс-dgpolyline).

Обратите внимание на то, что среди точек которые передаются для создания многоугольника не должно быть дополнительной точки, совпадающей с первой.

#### Конструктор
<table>
    <thead>
        <tr>
            <th>Конструктор</th>
            <th>Использование</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>DG.Polygon</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>[]&gt; <i>latlngs</i></nobr>,
                <nobr>&lt;<a href="#опции-1">Polyline options</a>&gt; <i>options?</i> )</nobr>
            </code></td>
            <td>
                <code>DG.polygon(&hellip;)</code>
            </td>
            <td>Создает объект многоугольника по переданному массиву географических точек и необязательному объекту опций. Возможно также создать многоугольник с дырками, передав массив массивов latlngs, первый latlngs массив отвечает за внешние границы, остальные описывают область внутри.</td>
        </tr>
    </tbody>
</table>


#### Методы

У многоугольника те же опции и методы, что и у ломаной, но с некоторыми отличиями.

<table>
    <thead>
        <tr>
            <th>Метод</th>
            <th>Возвращает</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>toGeoJSON</b>()</code></td>
            <td><code>Object</code></td>
            <td>Возвращает <a target="_blank" href="http://en.wikipedia.org/wiki/GeoJSON">GeoJSON</a> представление многоугольника (GeoJSON Polygon).</td>
        </tr>
    </tbody>
</table>

### Класс DG.MultiPolygon

Расширяет [FeatureGroup](/doc/maps/2.0/manual/groups#класс-dgfeaturegroup), позволяя создавать мультиполигоны (один слой, содержащий несколько многоугольников с общими стилями и балуном).

#### Конструктор
<table>
    <thead>
        <tr>
            <th>Конструктор</th>
            <th>Использование</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>DG.MultiPolygon</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>[][]&gt; <i>latlngs</i></nobr>,
                <nobr>&lt;<a href="#опции-1">Polyline options</a>&gt; <i>options?</i> )</nobr>
            </code></td>
            <td>
                <code>DG.multiPolygon(&hellip;)</code>
            </td>
            <td>Создает объект мультиполигона по переданному массиву массивов географических точек (каждый для своего многоугольника) и необязательному объекту опций.</td>
        </tr>
    </tbody>
</table>

#### Методы

<p>Мультиполигоны содержат все методы класса [Polyline](#класс-dgpolyline), но их поведение отличается, так как они содержат несколько многоугольников.</p>

<table>
    <thead>
        <tr>
            <th>Метод</th>
            <th>Возвращает</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>setLatLngs</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>[][]&gt; <i>latlngs</i> )</nobr>
            </code></td>

            <td><code>this</code></td>
            <td>Заменяет все геометрии многоугольников новыми на основе переданного многомерного массива географических координат.</td>
        </tr>
        <tr>
            <td><code><b>getLatLngs</b>()</td>
            <td><code><nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>[][]&gt; <i>latlngs</i></nobr>
            </code></td>
            <td>Возвращает многомерный массив географических координат каждого многоугольника.</td>
        </tr>
        <tr>
            <td><code><b>openPopup</b>()</code></td>
            <td><code>this</code></td>
            <td>Открывает балун, предварительно прикрепленный с помощью метода <a href="#path-bindpopup">bindPopup</a>.</td>
        </tr>
        <tr id="multipolygon-togeojson">
            <td><code><b>toGeoJSON</b>()</code></td>
            <td><code>Object</code></td>
            <td>Возвращает <a target="_blank" href="http://en.wikipedia.org/wiki/GeoJSON">GeoJSON</a> представление мультиполигона (GeoJSON MultiPolygon).</td>
        </tr>
    </tbody>
</table>

### Класс DG.Rectangle

Класс для отрисовки прямоугольников на карте. Расширяет [Polygon](#класс-dgpolygon).

    // создаем географические границы прямоугольника
    var bounds = [[54.9801, 82.8974], [54.9901, 82.9074]];

    // создаем оранжевый прямоугольник
    DG.rectangle(bounds, {color: "#ff7800", weight: 1}).addTo(map);

    // подстраиваем центр карты и масштаб так, чтобы прямоугольник было видно
    map.fitBounds(bounds);

#### Конструктор

<table>
    <thead>
        <tr>
            <th>Конструктор</th>
            <th>Использование</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>DG.Rectangle</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlngbounds">LatLngBounds</a>&gt; <i>bounds</i></nobr>,
                <nobr>&lt;<a href="#опции">Path options</a>&gt; <i>options?</i> )</nobr>
            </code></td>
            <td>
                <code>DG.rectangle(&hellip;)</code>
            </td>
            <td>Создает объект прямоугольника по переданным географическим границам и необязательному объекту опций.</td>
        </tr>
    </tbody>
</table>

#### Методы

Возможно использование [методов класса Path](#методы) и дополнительно следующих методов:

<table>
    <thead>
        <tr>
            <th>Метод</th>
            <th>Возвращает</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>setBounds</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlngbounds">LatLngBounds</a>&gt; <i>bounds</i> )</nobr>
                </code>
            </td>

            <td><code>this</code></td>
            <td>Перерисовывает прямоугольник согласно переданных границ.</td>
        </tr>
    </tbody>
</table>

### Класс DG.Circle

Класс для отрисовки круга на карте. Расширяет [Path](#класс-dgpath).

    DG.circle([54.98, 82.89], 200).addTo(map);

#### Конструктор

<table>
    <thead>
        <tr>
            <th>Конструктор</th>
            <th>Использование</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>DG.Circle</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>&gt; <i>latlng</i></nobr>,
                <nobr>&lt;Number&gt; <i>radius</i></nobr>,
                <nobr>&lt;<a href="#опции">Path options</a>&gt; <i>options?</i> )</nobr>
            </code></td>

            <td>
                <code>DG.circle(&hellip;)</code>
            </td>

            <td>Создает объект круга по переданной географической точке, радиусу в метрах и необязательному объекту опций.</td>
        </tr>
    </tbody>
</table>

#### Методы

<table>
    <thead>
        <tr>
            <th>Метод</th>
            <th>Возвращает</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>getLatLng</b>()</code></td>
            <td><code><a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a></code></td>
            <td>Возвращает текущее географическое положение круга.</td>
        </tr>
        <tr>
            <td><code><b>getRadius</b>()</code></td>
            <td><code>Number</code></td>
            <td>Возвращает текущий радиус круга, значение в метрах.</td>
        </tr>
        <tr>
            <td><code><b>setLatLng</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>&gt; <i>latlng</i> )</nobr>
            </code></td>

            <td><code>this</code></td>
            <td>Устанавливает новое положение круга.</td>
        </tr>
        <tr>
            <td><code><b>setRadius</b>(
                <nobr>&lt;Number&gt; <i>radius</i> )</nobr>
            </code></td>

            <td><code>this</code></td>
            <td>Устанавливает радиус круга, значение в метрах.</td>
        </tr>
        <tr>
            <td><code><b>toGeoJSON</b>()</code></td>
            <td><code>Object</code></td>
            <td>Возвращает <a target="_blank" href="http://en.wikipedia.org/wiki/GeoJSON">GeoJSON</a> представление круга (GeoJSON Point).</td>
        </tr>
    </tbody>
</table>

### Класс DG.CircleMarker

Круг фиксированного размера с радиусом указанным в пикселях. Расширяет [Circle](#класс-dgcircle).

#### Конструктор

<table>
    <thead>
        <tr>
            <th>Конструктор</th>
            <th>Использование</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code><b>DG.CircleMarker</b>(
                <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>&gt; <i>latlng</i></nobr>,
                <nobr>&lt;<a href="#опции">Path options</a>&gt; <i>options?</i> )</nobr>
            </code></td>
            <td>
                <code>DG.circleMarker(&hellip;)</code>
            </td>
            <td>Создает объект круга по переданной географической точке и необязательному объекту опций. Значение радиуса по умолчанию &mdash; 10 пикселей.</td>
        </tr>
    </thead>
</table>

#### Методы
<table>
    <thead>
        <tr>
            <th>Метод</th>
            <th>Возвращает</th>
            <th>Описание</th>
        </tr>
    </thead>
    <tr>
        <td><code><b>setLatLng</b>(
            <nobr>&lt;<a href="/doc/maps/2.0/manual/base-classes#класс-dglatlng">LatLng</a>&gt; <i>latlng</i> )</nobr>
        </code></td>

        <td><code>this</code></td>
        <td>Устанавливает позицию круга.</td>
    </tr>
    <tr>
        <td><code><b>setRadius</b>(
            <nobr>&lt;Number&gt; <i>radius</i> )</nobr>
        </code></td>

        <td><code>this</code></td>
        <td>Устанавливает радиус круга, значение в пикселях.</td>
    </tr>
    <tr>
        <td><code><b>toGeoJSON</b>()</code></td>
        <td><code>Object</code></td>
        <td>Возвращает <a target="_blank" href="http://en.wikipedia.org/wiki/GeoJSON">GeoJSON</a> представление круга (GeoJSON Point).</td>
    </tr>
</table>