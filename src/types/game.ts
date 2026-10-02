export type ShapeType =
  | 'pola_berulang'
  | 'pola_bertambah'
  | 'pola_berkurang'
  | 'pola_membesar'
  | 'pola_mengecil'
  | 'pola_kombinasi'
  | 'persegi'
  | 'persegi_panjang'
  | 'segitiga'
  | 'jajargenjang'
  | 'trapesium'
  | 'layang_layang'
  | 'belah_ketupat'
  | 'gabungan'
  | 'soal_cerita'
  | 'tantangan'
  | string;

export type QuestionType = 'pilihan_ganda' | 'isian_angka' | 'soal_cerita' | 'tantangan';

export type DifficultyLevel = 'mudah' | 'sedang' | 'sulit';

export interface PatternItem {
  stage: string; // e.g. "Pola 1", "Pola 2", "Pola 3", "Pola 4 (?)"
  countText?: string; // e.g. "3 kelereng", "5 kelereng"
  isMystery?: boolean;
}

export interface ShapeDiagramData {
  shape?: ShapeType;
  patternType?: string;
  dimensions?: { [key: string]: number | string };
  label?: string;
  notes?: string;
  ruleHint?: string;
  items?: PatternItem[];
}

export interface Question {
  id: string;
  locationId: 'pos_1' | 'pos_2' | 'pos_3' | 'pos_4' | 'pos_5' | string;
  question: string;
  shapeType: ShapeType;
  type: QuestionType;
  difficulty: DifficultyLevel;
  options?: string[]; // for multiple choice (shuffled on client/server)
  correctAnswer: string; // for server validation
  explanation: string;
  unit: string;
  diagram?: ShapeDiagramData;
}

// Sanitized question sent to student during active game (without correctAnswer and explanation until answered)
export interface ClientQuestion {
  id: string;
  locationId: string;
  question: string;
  shapeType: ShapeType;
  type: QuestionType;
  difficulty: DifficultyLevel;
  options?: string[];
  unit: string;
  diagram?: ShapeDiagramData;
}

export interface LocationConfig {
  id: 'pos_1' | 'pos_2' | 'pos_3' | 'pos_4' | 'pos_5' | string;
  code: string; // e.g. "POS 1", "POS 5"
  name: string; // e.g. "Kantin", "Wali Kelas 4"
  qrCode: string; // e.g. "MATH-LOC-A-001"
  hint: string; // Riddle / teka-teki
  isFinal: boolean;
  isActive: boolean;
  iconName: string; // lucide icon identifier
}

export interface GameSettings {
  durationMinutes: number; // 0 for unlimited, or 15, 30, 45, 60
  maxAttempts: number; // 2 or 3
  pointsFirstAttempt: number; // default 100
  pointsSecondAttempt: number; // default 75
  pointsThirdAttempt: number; // default 50
  pointsPosBonus: number; // default 100
  pointsGameBonus: number; // default 500
  hintMode: 'adventure' | 'easy'; // 'adventure' = riddles only, 'easy' = location name shown
  treasureCode: string; // default "MATEMATIKA-HEBAT"
  teacherMessage: string; // "Segera menuju lokasi harta karun! Carilah tempat yang telah ditentukan guru..."
  leaderboardEnabled: boolean;
}

export interface PlayerInfo {
  mode: 'individual' | 'group';
  playerName: string; // e.g. "Kelompok Garuda" or "Andi"
  className: string; // e.g. "Kelas 5A"
  members?: string[]; // e.g. ["Andi", "Budi", "Citra", "Deni"]
}

export interface PosProgress {
  locationId: string;
  qrVerified: boolean;
  completed: boolean;
  currentQuestionIndex: number;
  questionAttempts: { [questionId: string]: number }; // questionId -> number of attempts used
  solvedQuestions: string[]; // IDs of solved questions
}

export interface GameSession {
  gameId: string;
  player: PlayerInfo;
  startTime: number;
  endTime?: number;
  route: string[]; // e.g. ['pos_c', 'pos_a', 'pos_d', 'pos_b', 'pos_final']
  currentPosIndex: number; // 0 to 4
  score: number;
  totalCorrect: number;
  totalAttempts: number;
  posProgress: { [locationId: string]: PosProgress };
  status: 'active' | 'completed' | 'timeout' | 'locked';
  treasureUnlocked: boolean;
  lockedReason?: string;
  lockedQuestionId?: string;
  lockedPosName?: string;
}

export interface LeaderboardEntry {
  id: string;
  gameId: string;
  playerName: string;
  mode: 'individual' | 'group';
  className: string;
  members?: string[];
  score: number;
  completedStations: number; // out of 5
  correctCount: number; // out of 25
  totalQuestions: number;
  durationSeconds: number;
  accuracy: number; // percentage
  badge: string;
  completedAt: string;
}
