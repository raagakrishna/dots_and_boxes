let thisRoom = {}
var colours = ['red', 'blue', 'green', 'orange', 'yellow'];

// ONLY FOR TESTING
var playingGame = {
    "roomId": "ROOM12346789",
    "roomName": "My Room",
    "players": [
        {
            "username": "peter",
            "password": null
        },
        {
            "username": "mary",
            "password": null
        }
    ],
    "creator": {
        "username": "peter",
        "password": null
    },
    "game": {
        "gridSize": 9,
        "dots": [
            {
                "coordinate": {
                    "x": 0,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 16
                }
            }
        ],
        "lines": [
            {
                "coordinate": {
                    "x": 1,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 0
                    }
                },
                "status": "OCCUPIED",
                "player": "peter"
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 2
                    }
                },
                "status": "OCCUPIED",
                "player": "mary"
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "status": "OCCUPIED",
                "player": "peter"
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "status": "OCCUPIED",
                "player": "mary"
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            }
        ],
        "boxes": [
            {
                "coordinate": {
                    "x": 1,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "status": "OCCUPIED",
                    "player": "mary"
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "OCCUPIED",
                    "player": "peter"
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "status": "OCCUPIED",
                    "player": "peter"
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "OCCUPIED",
                    "player": "mary"
                },
                "status": "OCCUPIED",
                "player": "peter"
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            }
        ],
        "scores": [
            {
                "player": {
                    "username": "peter",
                    "password": null
                },
                "score": 1
            },
            {
                "player": {
                    "username": "mary",
                    "password": null
                },
                "score": 0
            }
        ],
        "status": "PLAYING",
        "currentPlayer": "mary",
        "winner": null
    },
    "status": "STARTED"
}

var startedGame = {
    "roomId": "ROOM12346789",
    "roomName": "My Room",
    "players": [
        {
            "username": "peter",
            "password": null
        },
        {
            "username": "mary",
            "password": null
        }
    ],
    "creator": {
        "username": "peter",
        "password": null
    },
    "game": {
        "gridSize": 9,
        "dots": [
            {
                "coordinate": {
                    "x": 0,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 16
                }
            }
        ],
        "lines": [
            {
                "coordinate": {
                    "x": 1,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            }
        ],
        "boxes": [
            {
                "coordinate": {
                    "x": 1,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            }
        ],
        "scores": [
            {
                "player": {
                    "username": "peter",
                    "password": null
                },
                "score": 0
            },
            {
                "player": {
                    "username": "mary",
                    "password": null
                },
                "score": 0
            }
        ],
        "status": "PLAYING",
        "currentPlayer": "mary",
        "winner": null
    },
    "status": "STARTED"
}

var openGame = {
    "roomId": "ROOM12345679",
    "roomName": "My Room",
    "players": [
        {
            "username": "peter",
            "password": null
        },
        {
            "username": "mary",
            "password": null
        }
    ],
    "creator": {
        "username": "peter",
        "password": null
    },
    "game": {
        "gridSize": 9,
        "dots": [
            {
                "coordinate": {
                    "x": 0,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 0
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 2
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 4
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 6
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 8
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 10
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 12
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 14
                }
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 16
                }
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 16
                }
            }
        ],
        "lines": [
            {
                "coordinate": {
                    "x": 1,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 0
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 0
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 1
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 0
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 2
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 2
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 3
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 2
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 4
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 4
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 5
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 4
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 6
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 6
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 7
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 6
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 8
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 8
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 9
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 8
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 10
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 10
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 11
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 10
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 12
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 12
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 13
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 12
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 14
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 14
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 0,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 0,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 2,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 4,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 6,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 8,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 10,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 12,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 14,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 16,
                    "y": 15
                },
                "dot1": {
                    "coordinate": {
                        "x": 16,
                        "y": 14
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 0,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 2,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 2,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 4,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 4,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 6,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 6,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 8,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 8,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 10,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 10,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 12,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 12,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 14,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 16
                },
                "dot1": {
                    "coordinate": {
                        "x": 14,
                        "y": 16
                    }
                },
                "dot2": {
                    "coordinate": {
                        "x": 16,
                        "y": 16
                    }
                },
                "status": "EMPTY",
                "player": null
            }
        ],
        "boxes": [
            {
                "coordinate": {
                    "x": 1,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 1
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 1
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 0
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 0
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 0
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 3
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 3
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 2
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 2
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 2
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 5
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 5
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 4
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 4
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 4
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 7
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 7
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 6
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 6
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 6
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 9
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 9
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 8
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 8
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 8
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 11
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 11
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 10
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 10
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 10
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 13
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 13
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 12
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 12
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 12
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 1,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 0,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 0,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 2,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 1,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 1,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 0,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 3,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 2,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 4,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 3,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 3,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 2,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 5,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 4,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 6,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 5,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 5,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 4,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 7,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 6,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 8,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 7,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 7,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 6,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 9,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 8,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 10,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 9,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 9,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 8,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 11,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 10,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 12,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 11,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 11,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 10,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 13,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 12,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 14,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 13,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 13,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 12,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            },
            {
                "coordinate": {
                    "x": 15,
                    "y": 15
                },
                "line1": {
                    "coordinate": {
                        "x": 14,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line2": {
                    "coordinate": {
                        "x": 16,
                        "y": 15
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line3": {
                    "coordinate": {
                        "x": 15,
                        "y": 14
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 14
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 14
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "line4": {
                    "coordinate": {
                        "x": 15,
                        "y": 16
                    },
                    "dot1": {
                        "coordinate": {
                            "x": 14,
                            "y": 16
                        }
                    },
                    "dot2": {
                        "coordinate": {
                            "x": 16,
                            "y": 16
                        }
                    },
                    "status": "EMPTY",
                    "player": null
                },
                "status": "EMPTY",
                "player": null
            }
        ],
        "scores": [
            {
                "player": {
                    "username": "peter",
                    "password": null
                },
                "score": 0
            },
            {
                "player": {
                    "username": "mary",
                    "password": null
                },
                "score": 0
            }
        ],
        "status": "WAITING",
        "currentPlayer": "peter",
        "winner": null
    },
    "status": "OPEN"
}

function loadGamePage() {
    thisRoom = startedGame;
    console.log(thisRoom);

    updateGame();
}

function updateGame() {
    populateGameInfo(thisRoom.roomName, thisRoom.status, thisRoom.roomId, thisRoom.creator.username, thisRoom.game.currentPlayer, thisRoom.players);
    populatePlayerScores(thisRoom.game.scores, thisRoom.status);
    populateGrid(thisRoom.game, thisRoom.players);
    displayGameButtons(thisRoom.creator, thisRoom.status);
}

// Define the CoOrdinate class 
class CoOrdinate {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

// Define the Dot class
class Dot {
    constructor(coordinate) {
        this.coordinate = coordinate;
    }
}

// Define the Line class 
class Line {
    constructor(coordinate) {
        this.coordinate = coordinate;
        this.dot1 = null;
        this.dot2 = null;
        this.occupied = false;
        this.player = null;
    }
    addDots(dot1, dot2) {
        this.dot1 = dot1;
        this.dot2 = dot2;
    }
    setOccupied(player){
        this.occupied = true;
        this.player = player;
    }
}

// Define the Box class 
class Box {
    constructor(coordinate) {
        this.coordinate = coordinate;
        this.line1 = null;
        this.line2 = null;
        this.line3 = null;
        this.line4 = null;
        this.occupied = false;
        this.player = null;
    }
    addLines(line1, line2, line3, line4) {
        this.line1 = line1;
        this.line2 = line2;
        this.line3 = line3;
        this.line4 = line4;
    }
    setOccupied(player){
        this.occupied = true;
        this.player = player;
    }
}

function displayGameButtons(gameCreator, status){
    const startButton = document.getElementById("startButton");
    const leaveButton = document.getElementById("leaveButton");
    const deleteButton = document.getElementById("deleteButton");

    const isCreator = gameCreator.username === localStorage.getItem("username");

    // display start button if creator and if game room is OPEN
    if (isCreator && status == 'OPEN' && !startButton.classList.contains('hidden')) {
        startButton.style.display = "block";
    } 
    else {
        startButton.style.display = "none";
    }

    if (isCreator && !deleteButton.classList.contains('hidden')) {
        deleteButton.style.display = 'block';
    }
    else {
        deleteButton.style.display = 'none';
    }

    if (!isCreator && !leaveButton.classList.contains('hidden')) {
        leaveButton.style.display = 'block';
    }
    else {
        leaveButton.style.display = 'none';
    }
}

function populateGameInfo(roomName, roomStatus, roomId, roomCreator, roomCurrentPlayer, players) {
    const gameData = {
        "Name": roomName,
        "Status": roomStatus.charAt(0) + roomStatus.slice(1).toLowerCase(),
        "Room ID": roomId,
        "Creator": roomCreator,
        "Number of players": players.length
    }

    var gameInfo = document.getElementById("gameInfo");
    gameInfo.innerHTML = "";

    for (const key in gameData) {
        const li = document.createElement("li");
        
        const b = document.createElement("b");
        b.textContent = key + ":";
        li.appendChild(b);

        const value = document.createTextNode(gameData[key]);
        li.appendChild(value);

        gameInfo.appendChild(li);
    }

    if (roomStatus != 'OPEN') {
        const li = document.createElement("li");
            
        const b = document.createElement("b");
        b.textContent = "Current player:";
        li.appendChild(b);

        const value = document.createTextNode(roomCurrentPlayer);
        li.appendChild(value);

        // colour the currentPlayer
        const currentPlayerIndex = players.findIndex(player => player.username === roomCurrentPlayer);
        li.style.color = colours[currentPlayerIndex];

        gameInfo.appendChild(li);
    }
}

function populatePlayerScores(scores, status) {
    var gameScores = document.getElementById("gameScores");
    if (status == 'STARTED') {
        gameScores.classList.remove("hidden");
        scores.forEach((score, index) => {
            const li = document.createElement("li");

            const b = document.createElement("b");
            b.textContent = score.player.username + ":";
            li.appendChild(b);

            const value = document.createTextNode(score.score);
            li.appendChild(value);
            li.style.color = colours[index];

            gameScores.appendChild(li);
        });
    }
    else {
        gameScores.classList.add("hidden");
    }
}

function toggleContent() {
    var gameInfo = document.getElementById("gameInfo");
    gameInfo.classList.toggle("hidden");

    if (thisRoom.status != 'OPEN') {
        var gameScores = document.getElementById("gameScores");
        gameScores.classList.toggle("hidden");
    }

    const startButton = document.getElementById("startButton");
    const leaveButton = document.getElementById("leaveButton");
    const deleteButton = document.getElementById("deleteButton");
    startButton.classList.toggle("hidden");
    leaveButton.classList.toggle("hidden");
    deleteButton.classList.toggle("hidden");

    displayGameButtons(thisRoom.creator, thisRoom.status);
}

function findDotBasedOnCoordinate(dots, coordinate) {
    return dots.find(dot => dot.coordinate.x === coordinate.x && dot.coordinate.y === coordinate.y) || null;
}

function findLineBasedOnCoordinate(lines, coordinate) {
    return lines.find(line => line.coordinate.x === coordinate.x && line.coordinate.y === coordinate.y) || null;
}

function findBoxBasedOnCoordinate(boxes, coordinate) {
    return boxes.find(box => box.coordinate.x === coordinate.x && box.coordinate.y === coordinate.y) || null;
}

function findCoordinate(dots, lines, boxes, coordinate) {
    const dot = findDotBasedOnCoordinate(dots, coordinate);
    if (dot) {
      return [dot, "Dot"];
    }
  
    const line = findLineBasedOnCoordinate(lines, coordinate);
    if (line) {
      return [line, "Line"];
    }
  
    const box = findBoxBasedOnCoordinate(boxes, coordinate);
    if (box) {
      return [box, "Box"];
    }
  
    return [null, null];
  }

function getCoordiante(line) {
    // Get the parent cell of the line
    const cell = line.parentNode;

    // Get the index of the line within its parent cell
    let xIndex = Array.from(cell.children).indexOf(line);
    let yIndex = Array.from(cell.parentNode.children).indexOf(cell);

    return new CoOrdinate(xIndex, yIndex);
}

function populateGrid(game, players) {
    var gridSize = game.gridSize;
    var dots = game.dots;
    var lines = game.lines;
    var boxes = game.boxes;
    
    // Generate the HTML table based on the dot coordinates
    const table = document.getElementById('game');
    table.innerHTML = "";
    table.classList.add('game');

    for (let i = 0; i < Tn(gridSize); i++) {
        const row = document.createElement('tr');
        
        for (let j = 0 ; j < Tn(gridSize) ; j++) {
            const td = document.createElement('td');
            
            var coordinateType = findCoordinate(dots, lines, boxes, new CoOrdinate(j, i));

            // return;
            
            // if Dot
            if (coordinateType[1] == 'Dot'){
                td.classList.add('dot');
            }

            // if Line
            else if (coordinateType[1] == 'Line') {
                td.classList.add('line');
                if (coordinateType[0].status != 'EMPTY'){
                    td.classList.add('selected');
                    
                    // Adding colour 
                    const playerIndex = players.findIndex(player => player.username === coordinateType[0].player);
                    td.classList.add('player' + playerIndex);
                    td.style.backgroundColor = colours[playerIndex];
                }
            }

            // if Box
            else {
                td.classList.add('box');
                if (coordinateType[0].status != 'EMPTY'){
                    td.classList.add('completed');

                    // Adding cross
                    const playerIndex = players.findIndex(player => player.username === coordinateType[0].player);
                    td.classList.add('player' + playerIndex);
                    td.style.color = colours[playerIndex];
                    td.innerHTML = "X";
                }
            }

            row.appendChild(td);
        }
        
        table.appendChild(row);
    }
    
    if (game.status == 'PLAYING') {
        // Get all the line elements
        const lines = document.querySelectorAll('.line');

        // Add click event listener to each line
        lines.forEach(line => {
            line.addEventListener('click', handleLineClick);
        });
    }
}

function handleLineClick(event) {
    const clickedLine = event.target;

    // valid turn
    if (thisRoom.game.currentPlayer == localStorage.getItem("username")) { 
        // Find Line 
        var coordinate = getCoordiante(clickedLine);
        var line = findLineBasedOnCoordinate(thisRoom.game.lines, coordinate);
        
        // Check if Line is already selected
        if (line.status != 'EMPTY') {
            return;
        }
        
        // send 
        var roomId = thisRoom.roomId;
        var username = localStorage.getItem("username");
        sendPlayerMove(roomId, username, coordinate.x, coordinate.y);
    }
    else {
        updateDisplayResult('failure', "It is not your turn!");
    }
}

function sendPlayerMove(roomID, username, x, y){
    fetch(`${backendUrl}/room/${encodeURIComponent(roomID)}/sendPlayerMove/${encodeURIComponent(username)}`, {
        method: 'POST',
        headers: setHeaders(),
        body: JSON.stringify({"x": x, "y": y})
    })
    .then(function (response) {
        if (response.ok) {
            return response.text();
        } 
        else {
            return response.json().then(function (errorMessage) {
                throw new Error(errorMessage.title);
            });
        }
    })
    .then(function (message) {
        // TODO: handle the success response (player move)
        updateDisplayResult('success', message);
    })
    .catch(function (error) {
        updateDisplayResult('failure', error);
    });
}

function Tn(n) {
    return (2 * n) - 1;
}

function startBtnClicked() {
    var roomID = thisRoom.roomId;
    var username = localStorage.getItem("username");
    startGame(username, roomID);
}

function leaveBtnClicked() {
    var roomID = thisRoom.roomId;
    var username = localStorage.getItem("username");
    leaveGame(username, roomID);
}

function deleteBtnClicked() {
    var roomID = thisRoom.roomId;
    var username = localStorage.getItem("username");
    deleteGame(username, roomID);
}

function startGame(username, roomID) {
    fetch(`${backendUrl}/room/${encodeURIComponent(roomID)}/start/${encodeURIComponent(username)}`, {
        method: 'GET',
        headers: setHeaders(),
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } 
        else {
            return response.json().then(function (errorMessage) {
                throw new Error(errorMessage.title);
            });
        }
    })
    .then(function (data) {
        console.log(data);
        // TODO: handle the success response (start room)
        updateDisplayResult('success', 'Room started successfully!');
        thisRoom = data;
        updateGame();
    })
    .catch(function (error) {
        updateDisplayResult('failure', error);
    });
}

function leaveGame(username, roomID) {
    fetch(`${backendUrl}/room/${encodeURIComponent(roomID)}/leave/${encodeURIComponent(username)}`, {
        method: 'POST',
        headers: setHeaders(),
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } 
        else {
            return response.json().then(function (errorMessage) {
                throw new Error(errorMessage.title);
            });
        }
    })
    .then(function (data) {
        console.log(data);
        // TODO: handle the success response (leave room)
        window.location.href = 'index.html';
    })
    .catch(function (error) {
        updateDisplayResult('failure', error);
    });
}

function deleteGame(username, roomID) {
    fetch(`${backendUrl}/room/${encodeURIComponent(roomID)}/delete/${encodeURIComponent(username)}`, {
        method: 'DELETE',
        headers: setHeaders(),
    })
    .then(function (response) {
        if (response.ok) {
            return response.json();
        } 
        else {
            return response.json().then(function (errorMessage) {
                throw new Error(errorMessage.title);
            });
        }
    })
    .then(function (data) {
        console.log(data);
        // TODO: handle the success response (delete room)
        window.location.href = 'index.html';
    })
    .catch(function (error) {
        updateDisplayResult('failure', error);
    });
}
