import api from "../api";

class MetricService {
  private static instance: MetricService;

  private constructor() {}

  public static getInstance(): MetricService {
    if (!MetricService.instance) {
      MetricService.instance = new MetricService();
    }
    return MetricService.instance;
  }

  async getData() {
    try {
      const response = await api.get("/dashboard/metrics");
      return response.data;
    } catch (error) {
      console.error("Erro ao carregar dados do dashboard:", error);
      throw error;
    }
  }
}

export default MetricService.getInstance();