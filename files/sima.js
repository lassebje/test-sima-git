var hello = simo.createSIMOTask()
hello.name = "Hello"

var initial = hello.initialCondition
initial.name = "Initial"


var simomodel = hello.model

var location = simomodel.location
location.name = "location"

var initialviewpoint = location.initialViewpoint

var point3 = initialviewpoint.eye
point3.x = -1.0


var vector3 = initialviewpoint.dir
vector3.x = 1.0


var vector3_2 = initialviewpoint.up
vector3_2.z = 1.0




var seasurface = location.seaSurface
seasurface.sizeX = 1000.0
seasurface.sizeY = 1000.0
seasurface.z = 0.0

var simacolor = seasurface.color
simacolor.red = 0.0
simacolor.blue = 0.7



var flatbottom = sima.createFlatBottom()
flatbottom.sizeX = 1000.0
flatbottom.sizeY = 1000.0
flatbottom.z = -1000.0

var simacolor_2 = flatbottom.color
simacolor_2.red = 0.7
simacolor_2.green = 0.7
simacolor_2.blue = 0.7


location.flatBottom = flatbottom



var simostaticcalculationparameters = simomodel.sIMOStaticCalculationParameters

var equilibriumgriddefinition = simostaticcalculationparameters.equilibriumGridDefinition





var simodynamiccalculationparameters = simomodel.sIMODynamicCalculationParameters







var storagetask = sima.createStorageTask()
storagetask.name = "StorageTask"


